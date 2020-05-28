import React from 'react';
import { action } from '@storybook/addon-actions';
import UniqueMultiSelect from './../UniqueMultiSelect';

const tasks = ['gym', 'tan', 'laundry']
const rankings = Array.from({ length: tasks.length }, (v, k) => k + 1)

const animals = ['cat', 'dog', 'horse', 'goose']
const actions = ['buy', 'sell', 'trade', 'breed']

export default {
  component: UniqueMultiSelect,
  title: 'UniqueMultiSelect',
};

export const threeValues = () => {
  return <UniqueMultiSelect
    names={tasks}
    onSelect={action('selected')}
    values={rankings}
  />
};

export const four_values = () => {
  return <UniqueMultiSelect
    names={animals}
    onSelect={action('selected')}
    values={actions}
  />
};
