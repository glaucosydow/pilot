import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import shortid from 'shortid'

import style from './style.css'

const RadioGroup = (props) => {
  const containerClass = classnames(style.container, {
    [style.containerDisabled]: props.disabled,
    [style.containerError]: props.error,
  })

  const radioButtons = props.options.map((option, index) => (
    <label className={style.radio}>
      <input
        type="radio"
        name={props.name}
        value={option.value}
        checked={
          (props.disabled && index === 0) ||
          (props.value === option.value)
        }
        onChange={props.onChange}
        className={style.input}
        disabled={props.disabled}
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
