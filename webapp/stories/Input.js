import React from 'react'
import PropTypes from 'prop-types'
import FaAndroid from 'react-icons/lib/fa/android'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from '../src/components/Input'

storiesOf('Input/Text field boxes', module)
  .add('disabled', () => (
    <Input
      name="name"
      label="Digite seu nome"
      placeholder="eaee"
      boxed
      disabled
    />
  ))
  .add('default', () => (
    <InputState boxed type="text" />
  ))
  .add('error', () => (
    <InputState boxed type="text" error="Tá pegando fogo bixo" />
  ))
  .add('success', () => (
    <InputState boxed type="text" success="Oloco meu" />
  ))
  .add('multiline disabled', () => (
    <Input
      name="teste"
      label="Fale tudo"
      placeholder="eae"
      boxed
      multiline
      disabled
    />
  ))
  .add('multiline default', () => (
    <InputState boxed multiline />
  ))
  .add('multiline error', () => (
    <InputState boxed multiline error="Erro!" />
  ))
  .add('disabled with icon', () => (
    <Input
      name="name"
      label="Digite seu nome"
      placeholder="eaee"
      boxed
      disabled
      icon={<FaAndroid />}
    />
  ))
  .add('default with icon', () => (
    <InputState boxed type="text" icon={<FaAndroid />} />
  ))
  .add('multiline disabled with icon', () => (
    <Input
      name="teste"
      label="Fale tudo"
      placeholder="eae"
      boxed
      multiline
      disabled
      icon={<FaAndroid />}
    />
  ))
  .add('multiline with icon', () => (
    <InputState boxed multiline icon={<FaAndroid />} />
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
        boxed={this.props.boxed ? true : false}
        onChange={e => this.setState({ email: e.target.value })}
        hint={this.props.boxed ? '' : 'Texto secundario'}
        error={this.props.error}
        success={this.props.success}
        multiline={this.props.multiline}
        icon={this.props.icon}
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
      hint="Texto secundário"
      placeholder="eae"
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
  .add('multiline disabled', () => (
    <Input
      name="teste"
      label="Fale tudo"
      multiline
      placeholder="eae"
      disabled
    />
  ))
  .add('multiline', () => <InputState multiline placeholder="eae" />)
  .add('multiline error', () => (
    <InputState multiline error="Erro!" />
  ))
  .add('disabled with icon', () => (
    <Input
      name="name"
      label="Digite seu nome"
      placeholder="eaee"
      disabled
      icon={<FaAndroid />}
    />
  ))
  .add('default with icon', () => (
    <InputState type="text" icon={<FaAndroid />} />
  ))
  .add('multiline disabled with icon', () => (
    <Input
      name="teste"
      label="Fale tudo"
      placeholder="eae"
      multiline
      disabled
      icon={<FaAndroid />}
    />
  ))
  .add('multiline with icon', () => (
    <InputState multiline icon={<FaAndroid />} />
  ))


storiesOf('Input/Password field', module)
  .add('disabled', () => (
    <Input
      type="password"
      name="pass"
      label="Digite sua senha"
      disabled
      placeholder="eae"
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
