import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'

// function Signup (){
//   return(
//     <Container>
//         <Form className ='form' title="Sign up" text='faça seu cadastro'>
//             <Form.Label htmlFor='nome'>Nome</Form.Label>
//             <Form.Input id='nome' type='text'/>
//             <Form.Label htmlFor='email'>Email</Form.Label>
//             <Form.Input id='email' type='text'/>
//             <Form.Label htmlFor='tel'>Tel</Form.Label>
//             <Form.Input id='tel' type='tel'/>
//             <Form.Label htmlFor='password'>Password</Form.Label>
//             <Form.Input id='password' type='password'/>
//             <Form.Button disabled >Enviar</Form.Button>
//             <Form.Link href='/login'>Fazer Login</Form.Link>
//         </Form>
//      </Container> 
//   )
// }

class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state = {disabled :true}

    this.email = React.createRef()
    this.password = React.createRef()
    this.nome = React.createRef()
    this.tel = React.createRef()
  }
  onDisabledButton = (e) => {
    const inputNome = this.nome.current
    const inputTel = this.tel.current
    const inputEmail = this.email.current
    const inputPassword = this.password.current     
   if(inputEmail.hasError() || inputPassword.hasError() || inputNome.hasError() || inputTel.hasError()){
    this.setState({disabled : true})
    }else {
      this.setState({disabled : false})
    }
  } 

  render(){
    return (
      <Container>
        <Form className ='form' title="Sign up" text='faça seu cadastro'>
            <Form.Label htmlFor='nome'>Nome</Form.Label>
            <Form.Input ref={this.nome} id='nome' onChange={this.onDisabledButton} type='text' required/>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Input ref={this.email} id='email' onChange={this.onDisabledButton} type='email' required/>
            <Form.Label htmlFor='tel'>Tel</Form.Label>
            <Form.Input ref={this.tel} id='tel' onChange={this.onDisabledButton} type='tel' />
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Input ref={this.password} id='password' onChange={this.onDisabledButton} minLength={6} type='password' required/>
            <Form.Button disabled={this.state.disabled} >Enviar</Form.Button>
            <Form.Link href='/login'>Fazer Login</Form.Link>
        </Form>
     </Container> 
    )
  }
}
 export default Signup


