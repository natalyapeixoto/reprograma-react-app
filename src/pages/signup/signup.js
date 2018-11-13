import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'

function Signup (){
  return(
    <Container>
        <Form className ='form' title="Sign up" text='faça seu cadastro'>
            <Form.Label htmlFor='nome'>Nome</Form.Label>
            <Form.Input id='nome' type='text'/>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Input id='email' type='text'/>
            <Form.Label htmlFor='tel'>Tel</Form.Label>
            <Form.Input id='tel' type='tel'/>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Input id='password' type='password'/>
            <Form.Button disabled >Enviar</Form.Button>
            <Form.Link href='/login'>Fazer Login</Form.Link>
        </Form>
     </Container> 
  )
}
 export default Signup


