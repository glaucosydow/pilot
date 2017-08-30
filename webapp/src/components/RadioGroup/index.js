import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import shortid from 'shortid'

import style from './style.css'

class RadioGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isSuccess: false }
  }

  componentDidMount () {
    if (this.props.success) {
      this.setState({ isSuccess: true })
    } else {
      this.setState({ isSuccess: false })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.success !== this.props.success) {
      if (nextProps.success) {
        this.setState({ isSuccess: true })
      } else {
        this.setState({ isSuccess: false })
      }
    }
  }

  handleChange = (e) => {
    if (this.state.isSuccess) {
      this.setState({ isSuccess: false })
    }

    this.props.onChange(e)
  }

  render () {
    const containerClass = classnames(style.container, {
      [style.containerDisabled]: this.props.disabled,
      [style.containerError]: this.props.error,
      [style.containerSuccess]: this.state.isSuccess,
    })

    const radioButtons = this.props.options.map((option, index) => (
      <label className={style.radio}>
        <input
          type="radio"
          name={this.props.name}
          value={option.value}
          checked={
            (this.props.disabled && index === 0) ||
            (this.props.value === option.value)
          }
          onChange={this.handleChange}
          className={style.input}
          disabled={this.props.disabled}
        />

        <span
          className={style.label}
        />

        <span className={style.name}>
          {option.name}
        </span>
      </label>
    ))

    return (
      <div className={containerClass}>
        {radioButtons}
      </div>
    )
  }
}

RadioGroup.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  succes: PropTypes.string,
}

RadioGroup.defaultProps = {
  value: '',
  disabled: false,
  error: '',
  success: '',
}

export default RadioGroup
