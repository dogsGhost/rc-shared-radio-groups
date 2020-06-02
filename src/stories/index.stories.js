import React from 'react';
import { action } from '@storybook/addon-actions';
import UniqueMultiselect from '../index';
import './../index.css';

const tasks = ['gym', 'tan', 'laundry']
const rankings = ['1st', '2nd', '3rd']

const animals = ['cat', 'dog', 'horse', 'goose']
const actions = ['buy', 'sell', 'trade', 'breed']

export default {
  component: UniqueMultiselect,
  title: 'Unique Multiselect',
};

export const threeValues = () => {
  return <UniqueMultiselect
    names={tasks}
    onSelect={action('selected')}
    values={rankings}
  />
};

export const fourValues = () => {
  return <UniqueMultiselect
    names={animals}
    onSelect={action('selected')}
    values={actions}
  />
};

export const noValuesPassed = () => {
  return <UniqueMultiselect
    names={animals}
    onSelect={action('selected')}
  />
};

export const incorrectNumberOfValuesPassed = () => {
  return <UniqueMultiselect
    names={animals}
    onSelect={action('selected')}
    values={[1]}
  />
};

export const noSelectHandlerPassed = () => {
  return <UniqueMultiselect
    names={tasks}
    values={rankings}
  />
};
