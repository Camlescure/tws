import React from 'react';
import { Button, Box } from '@mui/material';
import { twsModel } from '../data/storyData';

const ChoiceButtons = ({ options, handleChoice, twsModel, disabled }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
            {options.map((option, index) => (
                <Button
                    key={index}
                    variant="contained"
                    color="primary"
                    sx={{ marginBottom: 2 }}
                    onClick={() => handleChoice(option.next(twsModel))}
                    fullWidth
                    disabled={disabled}
                >
                    {option.text}
                </Button>
            ))}
        </Box>
    );
};

export default ChoiceButtons;
