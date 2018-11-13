import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'

function Login (){
  return(

      <Container>
        <Form title="Login" text='Entre com seu Email e Senha'>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Input id='email' type='text'/>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Input id='password' type='password'/>
            <Form.Button disabled >Enviar</Form.Button>
            <Form.Link href='/singup'>Criar uma conta</Form.Link>
        </Form>
      </Container>
  )
}
 export default Login