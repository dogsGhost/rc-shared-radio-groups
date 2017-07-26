import React, { Component } from 'react'
import UniqueMultiSelect from './UniqueMultiSelect'

const tasks = ['gym', 'tan', 'laundry']
const rankings = Array.from({length: tasks.length}, (v, k) => k + 1)

const animals = ['cat', 'dog', 'horse', 'goose']
const actions = ['buy', 'sell', 'trade', 'breed']

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
    this._handleSelection = this._handleSelection.bind(this)
  }

  _handleSelection(name, val) {
    this.setState({ [name]: val })
  }

  render() {
    return (
      <div className="App">
        <h2>example 1</h2>
        <UniqueMultiSelect
          names={tasks}
          values={rankings}
          onSelect={() => {}}
        />
        <h2>example 2</h2>
        <UniqueMultiSelect
          names={animals}
          values={actions}
          onSelect={this._handleSelection}
        />
      </div>
    );
  }
}

export default App
