import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from '../src/components/Checkbox'

class CheckboxState extends React.Component {
  constructor (props) {
    super(props)

    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    if (this.state.value) {
      this.setState({ value: '' })
    } else {
      this.setState({ value: e.target.value })
    }
  }

  render () {
    return (
      <div>
        <Checkbox
          name="pessoa"
          value="leo"
          label="Leonardo"
          checked={this.state.value === 'leo'}
          onChange={this.handleChange}
          disabled={this.props.disabled}
          error={this.props.error}
          success={this.props.success}
        />

        <p>Selecionado: {this.state.value}</p>
      </div>
    )
  }
}

storiesOf('Checkbox', module)
  .add('disabled', () => <CheckboxState disabled />)
  .add('default', () => <CheckboxState />)
  .add('success', () => <CheckboxState success="Eae sucesso" />)
  .add('error', () => <CheckboxState error="Errou!" />)
