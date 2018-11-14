import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Link from './index'

const stories = storiesOf('Components/Form/Link', module)
  
  
  stories.addDecorator(StoryRouter())
  .add('default', ()=>(
    <Link href="/">Criar uma Conta</Link>
))