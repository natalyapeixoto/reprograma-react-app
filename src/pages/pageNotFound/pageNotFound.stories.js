import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import PageNotFound from './index'

const stories = storiesOf('Pages/PageNotFound', module)
  
  
  stories.addDecorator(StoryRouter())
  .add('default', ()=>(
    <PageNotFound></PageNotFound>
))