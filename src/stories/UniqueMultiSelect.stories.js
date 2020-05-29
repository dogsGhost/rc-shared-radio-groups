import React from 'react';
import { action } from '@storybook/addon-actions';
import UniqueMultiSelect from './../UniqueMultiSelect';
import './../UniqueMultiSelect.css';

const tasks = ['gym', 'tan', 'laundry']
const rankings = ['1st', '2nd', '3rd']

const animals = ['cat', 'dog', 'horse', 'goose']
const actions = ['buy', 'sell', 'trade', 'breed']

export default {
  component: UniqueMultiSelect,
  title: 'Unique Multi-Select',
};

export const threeValues = () => {
  return <UniqueMultiSelect
    names={tasks}
    onSelect={action('selected')}
    values={rankings}
  />
};

export const fourValues = () => {
  return <UniqueMultiSelect
    names={animals}
    onSelect={action('selected')}
    values={actions}
  />
};

export const noValuesPassed = () => {
  return <UniqueMultiSelect
    names={animals}
    onSelect={action('selected')}
  />
};

export const noSelectHandlerPassed = () => {
  return <UniqueMultiSelect
    names={tasks}
    values={rankings}
  />
};
