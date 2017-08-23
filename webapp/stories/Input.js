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
    <InputState boxes type="text" />
  ))
  .add('error', () => (
    <InputState boxes type="text" error="Tá pegando fogo bixo" />
  ))
  .add('success', () => (
    <InputState boxes type="text" success="Oloco meu" />
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
        boxes={this.props.boxes ? true : false}
        onChange={e => this.setState({ email: e.target.value })}
        secondaryText={this.props.boxes ? '' : 'Texto secundario'}
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
  .add('disabled', () => (
    <Input
      type="password"
      name="pass"
      label="Digite sua senha"
      disabled
    />
  ))
  .add('default', () => (
    <InputState type="password" />
  ))
  .add('error', () => (
    <InputState type="password" error="Digite mais caracteres" />
  ))
  .add('success', () => (
    <InputState type="password" success="Boa rapá" />
  ))
