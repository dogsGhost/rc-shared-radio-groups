import React from 'react';
import { action } from '@storybook/addon-actions';
import SharedRadioGroups from '../index';
import './../index.css';

const tasks = ['gym', 'tan', 'laundry']
const rankings = ['1st', '2nd', '3rd']

const animals = ['cat', 'dog', 'horse', 'goose']
const actions = ['buy', 'sell', 'trade', 'breed']

export default {
  component: SharedRadioGroups,
  title: 'Shared Radio Groups',
};

export const threeValues = () => {
  return <SharedRadioGroups
    names={tasks}
    onSelect={action('selected')}
    values={rankings}
  />
};

export const fourValues = () => {
  return <SharedRadioGroups
    names={animals}
    onSelect={action('selected')}
    values={actions}
  />
};

export const noValuesPassed = () => {
  return <SharedRadioGroups
    names={animals}
    onSelect={action('selected')}
  />
};

export const incorrectNumberOfValuesPassed = () => {
  return <SharedRadioGroups
    names={animals}
    onSelect={action('selected')}
    values={[1]}
  />
};

export const noSelectHandlerPassed = () => {
  return <SharedRadioGroups
    names={tasks}
    values={rankings}
  />
};
