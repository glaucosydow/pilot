import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import MdVisibilityOff from 'react-icons/lib/md/visibility-off'
import MdVisibility from 'react-icons/lib/md/visibility'

import style from './style.css'

class Input extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      type: '',
    }
  }

  componentDidMount () {
    this.setState({
      type: this.props.type,
    })
  }

  render () {
    const containerClass = classnames(style.container, {
      [style.containerBoxes]: this.props.boxes,
      [style.containerError]: this.props.error,
      [style.containerSuccess]: this.props.success,
    })

    const labelClass = classnames(style.label, {
      [style.focusedLabel]: this.props.value,
    })

    const inputClass = classnames(style.input, {
      [style.focusedInput]: this.props.value,
      [style.inputPassword]: this.props.value && this.props.type === 'password',
    })

    return (
      <div className={containerClass}>
        <input
          id={this.props.name}
          type={this.state.type}
          disabled={this.props.disabled}
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          className={inputClass}
        />

        {this.props.type === 'password' && this.state.type === 'password' &&
          <MdVisibility
            className={style.iconVisibility}
            onClick={() => this.setState({ type: 'text' })}
          />
        }

        {this.props.type === 'password' && this.state.type === 'text' &&
          <MdVisibilityOff
            className={style.iconVisibility}
            onClick={() => this.setState({ type: 'password' })}
          />
        }

        <label
          htmlFor={this.props.name}
          className={labelClass}
        >
          {this.props.label}
        </label>

        {(this.props.secondaryText || this.props.success || this.props.error) &&
          <p
            className={style.secondaryText}
          >
            {this.props.success || this.props.error || this.props.secondaryText}
          </p>
        }
      </div>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  boxes: PropTypes.bool,
  secondaryText: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
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
