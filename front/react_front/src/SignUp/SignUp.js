import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'email@example.com'
    }
  } 

  
  updateEmailField = (event) => {
    this.setState({email:event.target.value})
       
  }

  render() {
    return(
    <div> 
        <from>
          <h1>{this.state.email}</h1>
          <label for="email">Enter your email:</label>
          <input type="email" id="email" onChange = {this.updateEmailField} />
        </from>
    </div>
    );
  }
}

export default SignUp;