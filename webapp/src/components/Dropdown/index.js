import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import onClickOutside from 'react-onclickoutside'
import shortid from 'shortid'

import style from './style.css'

class Dropdown extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isDropdownOpen: false,
    }
  }

  openCloseDropdown = () => {
    const { isDropdownOpen } = this.state
    const newDropdownState = this.props.disabled ? isDropdownOpen : !isDropdownOpen

    this.setState({
      isDropdownOpen: newDropdownState,
    })
  }

  handleClickOutside = () => {
    if (this.state.isDropdownOpen) {
      this.setState({
        isDropdownOpen: false,
      })
    }
  }

  selectOption = (value) => {
    this.props.onChange(value)

    this.setState({
      isDropdownOpen: false,
    })
  }

  findSelectedName = () => {
    if (!this.props.value && !this.props.title) {
      const firstOption = this.props.options[0]
      this.selectOption(firstOption.value)

      return firstOption.name
    }

    if (!this.props.value) {
      return ''
    }

    const selectedOption = this.props.options
      .find(({ value }) => value === this.props.value)

    return selectedOption.name
  }

  render () {
    const dropdownMenuClasses = classnames(style.dropdownMenu, {
      [style.show]: this.state.isDropdownOpen,
      [style.hide]: !this.state.isDropdownOpen,
    })

    const containerClass = classnames(style.container, {
      [style.containerDisabled]: this.props.disabled,
      [style.containerError]: this.props.error,
      [style.containerSuccess]: this.props.success,
    })

    const dropdownOptions = this.props.options.map(({ value, name }) => {
      const optionClasses = classnames(style.option, {
        [style.isSelected]: this.props.value === value,
      })

      return (
        <li
          key={shortid.generate()}
          className={optionClasses}
          onClick={() => this.selectOption(value)}
        >
          {name}
        </li>
      )
    })

    return (
      <div className={containerClass}>
        <div className={style.buttonGroup}>
          <label className={style.label}>{this.props.label}</label>
          <p
            className={style.input}
            onClick={this.openCloseDropdown}
          >
            {this.findSelectedName() || this.props.title}
          </p>

          {(this.props.success || this.props.error) &&
            <p
              className={style.secondaryText}
            >
              {this.props.success || this.props.error}
            </p>
          }

          <ul className={dropdownMenuClasses}>
            <div>
              {this.props.title &&
                <li
                  className={classnames(style.option, style.disabledOption)}
                >
                  {this.props.title}
                </li>
              }
              {dropdownOptions}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}


Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.string,
}

Dropdown.defaultProps = {
  value: '',
  disabled: false,
  title: '',
  error: '',
  success: '',
}

export default onClickOutside(Dropdown)
