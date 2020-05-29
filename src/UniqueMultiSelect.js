import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UniqueMultiSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._handleClick = this._handleClick.bind(this)
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

  render() {
    const generateValue = (name) => {
      const curVal = this.state[name]

      return this.props.values.map((val, i) => {
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
        )
      })
    }

    return (
      <div className="UniqueMultiSelect">
        {this.props.names.map((name, index) => {
          return (
            <div key={index} className="UniqueMultiSelect-item">
              <div className="UniqueMultiSelect-name">{name}:</div>
              <div className="UniqueMultiSelect-valueList">
                {generateValue(name)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

UniqueMultiSelect.propTypes = {
  names: PropTypes.array.isRequired,
  values: PropTypes.array,
  onSelect: PropTypes.func,
}

UniqueMultiSelect.defaultProps = {
  onSelect: () => { }
}

export default UniqueMultiSelect
