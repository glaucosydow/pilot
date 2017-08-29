import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

import style from './style.css'

const RadioGroup = (props) => {
  const radioButtons = props.options.map(option => (
    <label className={style.radio}>
      <input
        type="radio"
        name={props.name}
        value={option.value}
        checked={props.value === option.value}
        onChange={props.onChange}
        className={style.input}
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
    <div className={style.container}>
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
