import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Signup from './index'

const stories = storiesOf('Pages/Signup', module)
  
  
  stories.addDecorator(StoryRouter())
  .add('default', ()=>(
    <Signup></Signup>
))