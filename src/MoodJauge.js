import React from 'react';
import { useMood } from './MoodContext';
import './MoodJauge.css';
import avatarImg from './assets/avatar.png'; // tu ajoutes cette image toi-même

export default function MoodJauge() {
  const { mood } = useMood();
  const moodPercent = ((mood + 100) / 2).toFixed(0); // mood en % (0 à 100)

  return (
    <div className="mood-indicator">
      <img src={avatarImg} alt="Personnage" className="mood-avatar" />
      <span className="mood-text">{moodPercent}%</span>
    </div>
  );
}