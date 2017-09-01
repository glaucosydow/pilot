import React from 'react'
import { storiesOf } from '@storybook/react'
import TextArea from '../src/components/TextArea'

class TextAreaState extends React.Component {
  constructor (props) {
    super(props)
    this.state = { text: 'Eae boi' }
  }

  render () {
    return (
      <TextArea
        name="email"
        label="Fale o que quiser"
        placeholder="Só fale"
        value={this.state.text}
        boxed={this.props.boxed ? true : false}
        onChange={e => this.setState({ text: e.target.value })}
        hint={this.props.boxed ? '' : 'Hiiiint'}
        error={this.props.error}
        success={this.props.success}
      />
    )
  }
}

storiesOf('TextArea/with boxes', module)
  .add('disabled', () => (
    <TextArea
      name="name"
      label="Disserte"
      boxed
      disabled
    />
  ))
  .add('default', () => <TextAreaState boxed />)
  .add('error', () => <TextAreaState boxed error="Oloco" />)
  .add('success', () => <TextAreaState boxed success="Sucesso" />)

storiesOf('TextArea/without boxes', module)
  .add('disabled', () => (
    <TextArea
      name="name"
      label="Como é bom usar px"
      disabled
      hint="Bora usar em"
    />
  ))
  .add('default', () => <TextAreaState />)
  .add('error', () => <TextAreaState error="Oloco" />)
  .add('success', () => <TextAreaState success="Sucesso" />)

