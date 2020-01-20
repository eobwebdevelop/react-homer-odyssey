import React, {Component} from 'react';
import {Button,TextField, Snackbar,List, ListItem, ListItemText} from '@material-ui/core/';
import {Link} from 'react-router-dom';




class Profile extends Component {
  constructor(props) {
    super(props);
    this.state  = {
        profile: {
                email:  "homer.simpson@wildcodeschool.fr",
                name:  "Homer",
                lastname:  "Simpson"
        }
    }
  } 

  



  handlerSubmit = (e) => {
    e.preventDefault();
    console.log("the form has been submited with these fields:", this.state );
    fetch("/auth/profile",
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

            <List>
                <ListItem>
                        <ListItemText primary="email" secondary={this.state.profile.email}/>
                        <ListItemText primary="name" secondary={this.state.profile.name}/>
                        <ListItemText primary="lastname" secondary={this.state.profile.lastname}/>
                </ListItem>
            </List> 
            <br/><br/>
            <Link to="/signin">
                <Button variant="contained"  type="submit" color="primary" onClick = {this.handleSnackOpen}>Go to sign in</Button>
            </Link>
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

export default Profile;