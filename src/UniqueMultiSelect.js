import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UniqueMultiSelect extends Component {
  constructor(props) {
    super(props)
    // if no values passed create array of numbers the same length as props.names
    // if props.names has 3 values this.values = [1, 2, 3]
    this.values = this.props.values || Array.from({ length: props.names.length }, (v, k) => k + 1)
    this.state = {}
    this._handleClick = this._handleClick.bind(this)
    this._handleChange = this._handleChange.bind(this)
  }

  _handleClick(e) {
    const val = e.target.innerHTML
    const name = e.target.dataset.name
    // user selects the value they prev selected, effectively 'unselecting' it
    // or user selects a value for first time
    const newVal = val === this.state[name] ? '' : val

    // call whatever custom handler was passed in
    this.props.onSelect(name, val)
    // update local state
    this.setState({ [name]: newVal })
  }

  _handleChange(e) {
    console.log(e)
  }

  generateValue(name) {
    // get current value or undefined if not set yet
    const curVal = this.state[name]

    return this.values.map((val, i) => {
      // cast val to string as curVal will be string
      val = typeof val !== 'string' ? `${val}` : val
      let handler = this._handleClick
      let hasVal = false
      let cName = 'UniqueMultiSelect-value'
      cName += (curVal === val ? ' is-selected' : '')

      for (let key in this.state) {
        if (this.state[key] === val) hasVal = true
      }

      if ((curVal !== val && hasVal) || (curVal && curVal !== val)) {
        cName += ' is-disabled'
        handler = () => { }
      }

      return (
        <div
          className={cName}
          data-name={name}
          key={i}
          onClick={handler}>
          {val}
        </div>
        // <div
        //   className={cName}
        //   key={i}>
        //   <label className="UniqueMultiSelect-label" htmlFor={name + i}>{val}</label>
        //   <input
        //     className="UniqueMultiSelect-input"
        //     id={name + i}
        //     name={name}
        //     onChange={handler}
        //     type="radio"
        //     value={val} />
        // </div>
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
