import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = props => (
  <div>
    <input
      type="checkbox"
      name={props.name}
      value={props.value}
      id={props.value}
      checked={props.checked}
      onChange={props.onChange}
      disabled={props.disabled}
    />
    <label htmlFor={props.value}>{props.label}</label>

    {(props.success || props.error) &&
      <p>
        {props.success || props.error}
      </p>
    }
  </div>
)

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
