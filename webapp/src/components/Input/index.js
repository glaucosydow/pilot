import React from 'react'
import PropTypes from 'prop-types'

import style from './style.css'

const Input = (props) => (
  <div className={style.container}>
    <input
      id={props.name}
      type={props.type}
      disabled={props.disabled}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={style.input}
    />

    <span className={style.bar} />
    <label
      htmlFor={props.name}
      className={style.label}
    >
      {props.label}
    </label>

    { props.secondaryText && !props.success && !props.error &&
      <p>{props.secondaryText}</p>
    }

    { props.success &&
      <p>{props.success}</p>
    }

    { props.error &&
      <p>{props.error}</p>
    }
  </div>
)

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
