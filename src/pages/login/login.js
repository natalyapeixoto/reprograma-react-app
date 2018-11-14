import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'


class Login extends React.Component {
    constructor(){
      super()
      this.state = {disabled: true}
      this.email = React.createRef()
      this.password = React.createRef()
    }
    onDisabledButton = (e) => {
      const inputEmail = this.email.current
      const inputPassword = this.password.current     
     if(inputEmail.hasError() || inputPassword.hasError()){
      this.setState({disabled : true})
      }else {
        this.setState({disabled : false})
      }
    } 
    render(){
      return (
      <Container>
        <Form title="Login" text='Entre com seu Email e Senha' onFocus={this.handleFocus}>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Input ref={this.email} id='email' type='email' onChange={this.onDisabledButton} required />
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Input ref={this.password} id='password' type='password' minLength={6} onChange={this.onDisabledButton} required />
            <Form.Button disabled={this.state.disabled} >Enviar</Form.Button>
            <Form.Link href='/singup'>Criar uma conta</Form.Link>
        </Form>
      </Container>
      )
    }
}
 export default Login