import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UniqueMultiselect extends Component {
  constructor(props) {
    super(props)
    // if no values passed create array of numbers the same length as props.names
    // if props.names has 3 values this.values = [1, 2, 3]
    this.values = props.values || Array.from({ length: props.names.length }, (v, k) => k + 1)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)

    if (props.values && (props.names.length !== props.values.length)) {
      console.error(
        `UniqueMultiselect Error: The arrays PROPS.NAMES and PROPS.VALUES are not the same length (${props.names.length} vs ${props.values.length})`
      )
    }
  }

  generateValue(name) {
    // get current value or undefined if not set yet
    const curVal = this.state[name]

    return this.values.map((val, i) => {
      // cast val to string as curVal will be string
      val = typeof val !== 'string' ? `${val}` : val
      let handler = this.handleChange
      let hasVal = false
      let isDisabled = false
      let cName = 'UniqueMultiselect-value'
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
          <label className="UniqueMultiselect-label" htmlFor={name + i}>{val}</label>
          <input
            className="UniqueMultiselect-input"
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

  handleChange({ target }) {
    const value = target.value
    const name = target.name
    // user selects the value they prev selected, effectively 'unselecting' it
    // or user selects a value for first time
    const newVal = value === this.state[name] ? '' : value

    // call whatever custom handler was passed in
    this.props.onSelect({ name, value: newVal })
    // update local state
    this.setState({ [name]: newVal })
  }

  render() {
    return (
      <div className="UniqueMultiselect">
        {this.props.names.map((name, index) => {
          return (
            <div key={index} className="UniqueMultiselect-item">
              <div className="UniqueMultiselect-name">{name}:</div>
              <div className="UniqueMultiselect-valueList">
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
UniqueMultiselect.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  // values & names must be the same length
  values: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  // handler for when a value is set
  onSelect: PropTypes.func,
}

UniqueMultiselect.defaultProps = {
  // default to empty function
  onSelect: () => {
    console.log('UniqueMultiselect: No PROPS.ONSELECT value passed')
  }
}

export default UniqueMultiselect
