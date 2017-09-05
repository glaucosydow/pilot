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

  componentWillMount () {
    this.setState({
      type: this.props.type,
    })
  }

  render () {
    const containerClass = classnames(style.container, {
      [style.containerBoxes]: this.props.boxed,
      [style.containerError]: this.props.error,
      [style.containerSuccess]: this.props.success,
    })

    const inputClass = classnames({
      [style.inputPassword]: this.props.value && this.props.type === 'password',
    })

    return (
      <div className={containerClass}>
        { !this.props.multiline &&
          <input
            id={this.props.name}
            type={this.state.type}
            disabled={this.props.disabled}
            value={this.props.value}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            className={inputClass}
          />
        }

        { this.props.multiline &&
          <textarea
            {...this.props}
          />
        }

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
        >
          {this.props.label}
        </label>

        {(this.props.hint || this.props.success || this.props.error) &&
          <p
            className={style.secondaryText}
          >
            {this.props.success || this.props.error || this.props.hint}
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
  value: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  boxed: PropTypes.bool,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  boxed: false,
  placeholder: '',
  hint: '',
  disabled: false,
  error: '',
  success: '',
  multiline: false,
}

export default Input
