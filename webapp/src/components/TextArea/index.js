import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './style.css'

const TextArea = (props) => {
  const containerClass = classnames(style.container, {
    [style.containerBoxes]: props.boxed,
    [style.containerError]: props.error,
    [style.containerSuccess]: props.success,
  })

  const labelClass = classnames(style.label, {
    [style.focusedLabel]: props.value,
  })

  const inputClass = classnames(style.input, {
    [style.focusedInput]: props.value,
  })

  return (
    <div className={containerClass}>
      <textarea
        id={props.name}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={inputClass}
      />

      <label
        htmlFor={props.name}
        className={labelClass}
      >
        {props.label}
      </label>

      {(props.hint || props.success || props.error) &&
        <p
          className={style.secondaryText}
        >
          {props.success || props.error || props.hint}
        </p>
      }
    </div>
  )
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  boxed: PropTypes.bool,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.string,
}

TextArea.defaultProps = {
  placeholder: '',
  boxed: false,
  disabled: false,
  hint: '',
  error: '',
  success: '',
}

export default TextArea
