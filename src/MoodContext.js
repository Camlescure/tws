// src/MoodContext.js
import React, { createContext, useContext, useState } from 'react';

const MoodContext = createContext();

export function MoodProvider({ children }) {
  const [mood, setMood] = useState(0); // humeur entre -100 et 100

  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  return useContext(MoodContext);
}