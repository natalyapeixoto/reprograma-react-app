import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Login from './index'

const stories = storiesOf('Pages/Login', module)
  
  
  stories.addDecorator(StoryRouter())
  .add('default', ()=>(
    <Login></Login>
))