import React, {Component} from 'react';
import {Button,TextField, Snackbar} from '@material-ui/core/';



class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      name: "James",
      lastname: "Bond",
      flash: "",
      isSnackOpen: false
    }
  } 

  
  updateEmailField = (event) => {
    this.setState({email:event.target.value}) 
  }
  updatePasswordField = (event) => {
    this.setState({password:event.target.value}) 
  }
  updateNameField = (event) => {
    this.setState({name:event.target.value}) 
  }
  updateLastnameField = (event) => {
    this.setState({lastname:event.target.value}) 
  }

  handleSnackOpen = () => {
    this.setState({isSnackOpen: true})
  }
  halderSnackClose = () => {
    this.setState({isSnackOpen: false})
  }


  handlerSubmit = (e) => {
    e.preventDefault();
    console.log("the form has been submited with these fields:", this.state );
    fetch("/auth/signup",
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify(this.state),
    })
    .then(res  =>  res.json())
    .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
    )
  }
  


  render() {
    return(
    <div> 
        <form onSubmit={this.handlerSubmit}>
          <h1>{JSON.stringify(this.state,1,1)}</h1>
          <TextField type="text" id="name" placeholder="name" onChange = {this.updateNameField}/>
          <br/>
          <TextField type="text" id="lastname" placeholder="lastname" onChange = {this.updateLastnameField}/>
          <br/>
          <TextField type="email" placeholder="email" id="email" onChange = {this.updateEmailField} />
          <br/>
          <TextField type="password" id="password" placeholder="password" onChange = {this.updatePasswordField}/>
          <br/>
          <TextField type="password" id="passwordConf" placeholder="password confirmation" />
          <br/> <br/>
          <Button variant="contained"  type="submit" color="primary" onClick = {this.handleSnackOpen}>Submit</Button>
          <Snackbar
            open={this.state.isSnackOpen}
            autoHideDuration={40000}
            onClose={this.halderSnackClose}
            message={this.state.flash}
          />
        </form>
    </div>
    );
  }
}

export default SignUp;