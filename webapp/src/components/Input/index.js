import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './style.css'

const Input = (props) => {
  let containerClass = style.container

  if (props.error) {
    containerClass = classnames(style.container, style.containerError)
  } else if (props.success) {
    containerClass = classnames(style.container, style.containerSuccess)
  }

  let labelClass = style.label

  if (props.value) {
    labelClass = classnames(style.label, style.focusedInput)
  }

  return (
    <div className={containerClass}>
      <input
        id={props.name}
        type={props.type}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={style.input}
      />

      <label
        htmlFor={props.name}
        className={labelClass}
      >
        {props.label}
      </label>

      { (props.secondaryText || props.success || props.error) &&
        <p
          className={style.secondaryText}
        >
          {props.success || props.error || props.secondaryText}
        </p>
      }
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  boxes: PropTypes.bool,
  secondaryText: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  type: 'text',
  boxes: false,
  placeholder: '',
  secondaryText: '',
  disabled: false,
  error: '',
  success: '',
}

export default Input
