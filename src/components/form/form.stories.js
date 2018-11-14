import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Form from './index'

const stories = storiesOf('Components/Form', module)
  
  
  stories.addDecorator(StoryRouter())
  .add('default', ()=>(
    <Form>
      
    </Form>
))