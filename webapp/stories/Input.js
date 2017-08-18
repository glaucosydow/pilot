import React from 'react'

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
    <Input
      name="email"
      label="Digite seu email"
      placeholder="nome@email.com"
      secondaryText="Texto secundário"
    />
  ))
  .add('error', () => (
    <Input
      name="email"
      label="Digite seu email"
      placeholder="nome@email.com"
      secondaryText="Text secundário"
      error="Email no formato errado"
    />
  ))
  .add('success', () => (
    <Input
      name="email"
      label="Digite seu email"
      placeholder="nome@email.com"
      secondaryText="Texto secundário"
      success="Gudi jobi lirou frendi!"
    />
  ))

storiesOf('Input/Password field', module)
  .add('default', () => (
    <Input
      name="pass"
      type="password"
      label="Digite sua senha"
      placeholder="kakaka"
      secondaryText="Mínimo de 12 caracteres"
    />
  ))
