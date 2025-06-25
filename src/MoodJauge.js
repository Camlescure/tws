import React from 'react';
import './MoodJauge.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import avatarImg from './assets/avatar.png';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function MoodJauge({ twsModel }) {
  return (
    <div className="mood-indicator">
      <Stack maxWidth="sm">
        <Item>
          <img src={avatarImg} alt="Personnage" className="mood-avatar" />
          <span className="mood-text">{twsModel.mood}%</span>
        </Item>
        <Item>
          <Typography className="mood-text">💳 {twsModel.wallet}€</Typography>
        </Item>
      </Stack>
    </div>
  );
}