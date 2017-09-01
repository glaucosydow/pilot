import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './style.css'

const Checkbox = (props) => {
  const secondaryTextClass = classnames(style.secondaryText, {
    [style.error]: props.error,
    [style.success]: props.success,
  })

  return (
    <div className={style.container}>
      <input
        type="checkbox"
        name={props.name}
        value={props.value}
        id={props.value}
        checked={props.checked}
        onChange={props.onChange}
        disabled={props.disabled}
        className={style.checkbox}
      />
      <label
        htmlFor={props.value}
        className={style.label}
      >
        {props.label}
      </label>

      {(props.success || props.error) &&
        <p className={secondaryTextClass}>
          {props.success || props.error}
        </p>
      }
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
}

Checkbox.defaultProps = {
  disabled: false,
  error: '',
  success: '',
}

export default Checkbox
