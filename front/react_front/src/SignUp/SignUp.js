import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      name: "James",
      lastname: "Bond"
    }
  } 

  
  updateEmailField = (event) => {
    this.setState({email:event.target.value}) 
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    console.log("the form has been submited with these fields:", this.state );
  }


  render() {
    return(
    <div> 
        <form onSubmit={this.handlerSubmit}>
          <h1>{JSON.stringify(this.state,1,1)}</h1>
          <input type="text" id="name" placeholder="name" />
          <br/>
          <input type="text" id="lastname" placeholder="lastname" />
          <br/>
          <input type="email" placeholder="email" id="email" onChange = {this.updateEmailField} />
          <br/>
          <input type="password" id="password" placeholder="password" />
          <br/>
          <input type="password" id="passwordConf" placeholder="password confirmation" />
          <br/> <br/>
          <input type="submit" value="Submit"/> 

        </form>
    </div>
    );
  }
}

export default SignUp;