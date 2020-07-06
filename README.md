# React Component: Shared Radio Groups

A normal radio set allows you to select one unique value exclusive to a set.
This component allows you to select a unique value across multiple sets that share the same set of values. When an option is selected in one set, it is automatically disabled in associated sets.

[View demo](http://dogsghost.github.io/rc-shared-radio-groups)

## Installing

```
$ npm i --save rc-shared-radio-groups
```

## Usage

```jsx
import SharedRadioGroups from 'rc-shared-radio-groups';

const sharedRadioGroupsHandler = (selection) => {
  console.log(selection.name);
  console.log(selection.value);
}

<SharedRadioGroups
  names={['cat', 'dog']}
  onSelect={sharedRadioGroupsHandler}
  values={['first', 'second']}>
```

## Props

The component accepts three props.

### `names`

Type: `string[]`

Required. Must be an array of strings. 

### `onSelect`

Type: `function`

Optional. If passed must be a function. This is passed the name/value of specific set when it is seleected/deselected.

### `values`

Type: `array`

These are the shared options available to select for each item in `names`.
