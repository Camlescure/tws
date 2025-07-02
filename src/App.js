import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import ChoiceButtons from './components/ChoiceButtons';
import DropEmoji from './components/DropEmoji';
import LocationPicture from './components/LocationPicture';
import NameForm from './components/NameForm'; // Import du nouveau composant
import StoryCard from './components/StoryCard';
import storyData from './data/storyData';
import MoodJauge from './MoodJauge';
import { initTwsModel, modelHooks } from './data/storyData';

function App() {
  const [currentStoryId, setCurrentStoryId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);
  const [twsModel, setTwsModel] = useState(initTwsModel);

  // Handles user choices or coinflip results
  const handleChoice = (nextId) => {
    setLoading(true);

    // Before going to the next step, check if the current model conditions trigger a special event.
    // If modelHooks return a string, set the storyID to that string
    var hook = modelHooks(twsModel)
    if (hook != null) {
      setCurrentStoryId(hook)
    }
    else {
      // If no hook, go to the next item
      setCurrentStoryId(nextId);
    }
  };

  // Handles name submission
  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsNameSet(true); // name is defined
  };

  const handleTextLoadComplete = () => {
    setLoading(false);  // Text has finished rendering
  };

  // Replace xxx with the name of the player
  const getPersonalizedStory = (storyText, userName) => {
    return storyText.replace('xxx', userName);
  };

  
  // Fetch the current story or fallback to a default message if the story is undefined
  const currentStory = storyData[currentStoryId] || { text: 'No story available.', options: [], location: "BlueSky" };
  const choiceOptions = currentStory.choices?.(twsModel) || []; 
  
  return (
    <Container
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        alignContent: 'normal',
        alignItems: 'center',
      }}
    >
      <LocationPicture place={currentStory.location} />
      <Box
        sx={{
          backgroundColor: "#FFFFFF90",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maxWidth: 800,
          margin: "auto",
          marginTop: "10%",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            marginBottom: '20px',
            fontFamily: 'Roboto, sans-serif',
            color: '#1A237E', // Dark blue color for the title
          }}
        >
          💍 Trad Wife Simulator
        </Typography>
        {currentStory.emoji && <DropEmoji emoji={currentStory.emoji} count={50} />}
        {!isNameSet ? (
          // Utilisation du composant NameForm
          <NameForm userName={userName} setUserName={setUserName} handleSubmit={handleNameSubmit} />
        ) : (
          <div>
            <MoodJauge twsModel={twsModel} />
            <StoryCard
              text={getPersonalizedStory(currentStory.text, userName)}
              onTextLoadComplete={handleTextLoadComplete}
            />
            {/* Check if there are options or a coinflip */}

            {choiceOptions && choiceOptions.length > 0 ? (
              <ChoiceButtons
                twsModel={twsModel}
                setTwsModel={setTwsModel}
                options={choiceOptions}
                handleChoice={handleChoice}
                disabled={loading}
              />
            ) : (
              <Typography align="center" variant="h6" color="textSecondary">
                The End.
              </Typography>
            )}
          </div>
        )}
      </Box>
    </Container>
  );
}

export default App;
