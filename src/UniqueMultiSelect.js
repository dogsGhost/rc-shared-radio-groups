import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UniqueMultiSelect extends Component {
  constructor(props) {
    super(props)
    // if no values passed create array of numbers the same length as props.names
    // if props.names has 3 values this.values = [1, 2, 3]
    this.values = this.props.values || Array.from({ length: props.names.length }, (v, k) => k + 1)
    this.state = {}
    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange({ target }) {
    const value = target.value
    const name = target.name
    // user selects the value they prev selected, effectively 'unselecting' it
    // or user selects a value for first time
    const newVal = value === this.state[name] ? '' : value

    // call whatever custom handler was passed in
    this.props.onSelect({ name, value })
    // update local state
    this.setState({ [name]: newVal })
  }

  generateValue(name) {
    // get current value or undefined if not set yet
    const curVal = this.state[name]

    return this.values.map((val, i) => {
      // cast val to string as curVal will be string
      val = typeof val !== 'string' ? `${val}` : val
      let handler = this._handleChange
      let hasVal = false
      let isDisabled = false
      let cName = 'UniqueMultiSelect-value'
      cName += (curVal === val ? ' is-selected' : '')

      for (let key in this.state) {
        if (this.state[key] === val) hasVal = true
      }

      if ((curVal !== val && hasVal) || (curVal && curVal !== val)) {
        cName += ' is-disabled'
        isDisabled = true
        handler = () => { }
      }

      return (
        <div
          className={cName}
          key={i}>
          <label className="UniqueMultiSelect-label" htmlFor={name + i}>{val}</label>
          <input
            className="UniqueMultiSelect-input"
            disabled={isDisabled ? "disabled" : ""}
            id={name + i}
            name={name}
            onChange={handler}
            type="checkbox"
            value={val} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="UniqueMultiSelect">
        {this.props.names.map((name, index) => {
          return (
            <div key={index} className="UniqueMultiSelect-item">
              <div className="UniqueMultiSelect-name">{name}:</div>
              <div className="UniqueMultiSelect-valueList">
                {this.generateValue(name)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

// accepts three props
UniqueMultiSelect.propTypes = {
  names: PropTypes.array.isRequired,
  // values & names must be the same length
  values: PropTypes.array,
  // handler for when a value is set
  onSelect: PropTypes.func,
}

UniqueMultiSelect.defaultProps = {
  // default to empty function
  onSelect: () => { }
}

export default UniqueMultiSelect
