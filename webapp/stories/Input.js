import React from 'react'
import PropTypes from 'prop-types'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from '../src/components/Input'

storiesOf('Input/Text field boxes', module)
  .add('disabled', () => (
    <Input
      name="name"
      label="Digite seu nome"
      boxes
      disabled
    />
  ))
  .add('default', () => (
    <Input
      name="name"
      label="Digite seu nome"
      placeholder="Ex: Felquis da Silva"
      boxes
    />
  ))
  .add('error', () => (
    <Input
      name="name"
      label="Digite seu nome"
      placeholder="Ex: Felquis da Silva"
      boxes
      error="Nome errado"
    />
  ))
  .add('success', () => (
    <Input
      name="name"
      label="Digite seu nome"
      placeholder="Ex: Felquis da Silva"
      boxes
      success="Nome legal"
    />
  ))


class InputState extends React.Component {
  constructor (props) {
    super(props)
    this.state = { email: 'Leo' }
  }

  render () {
    return (
      <Input
        name="email"
        label="Digite seu email"
        type={this.props.type}
        placeholder="nome@email.com"
        value={this.state.email}
        onChange={e => this.setState({ email: e.target.value })}
        secondaryText="Texto secundario"
        error={this.props.error}
        success={this.props.success}
      />
    )
  }
}

storiesOf('Input/Text field', module)
  .add('disabled', () => (
    <Input
      name="email"
      label="Digite seu email"
      disabled
      secondaryText="Texto secundário"
    />
  ))
  .add('default', () => (
    <InputState type="text" />
  ))
  .add('error', () => (
    <InputState type="text" error="Email no formato errado" />
  ))
  .add('success', () => (
    <InputState type="text" success="Good jobi lirou frendi" />
  ))

storiesOf('Input/Password field', module)
  .add('default', () => (
    <InputState type="password" />
  ))
