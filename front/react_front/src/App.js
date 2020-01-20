import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Profile from './Profile/Profile';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import {MuiThemeProvider, Grid, Paper} from '@material-ui/core/';


function App() {
  return (
    <div className="App">
        <MuiThemeProvider  >
          <Grid  container
          alignItems='center'
          style={{ height:  '100%' }}>
                  <Grid  item  xs={12}>

                      <Paper
                      elevation={4}
                      style={{ margin:  32 }}
                      >
                              <Grid  container
                              alignItems='center'
                              justify='center'>
                                   <Grid  item  xs={12}  sm={6} style={{ 'text-align':  'center' }}>
                                        <img  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"  />
                                    </Grid>
                                    <Grid  item  xs={12}  sm={6}>
                                      <BrowserRouter>
                                          <Switch>
                                              <Route
                                                exact
                                                path="/signup"
                                                render={() => (
                                                  <>
                                                    <SignUp />
                                                  </>
                                                )}
                                              />
                                              <Route
                                                exact
                                                path="/signin"
                                                render={() => (
                                                  <>
                                                    <SignIn />
                                                  </>
                                                )}
                                              />
                                              <Route
                                                exact
                                                path="/profile"
                                                render={() => (
                                                  <>
                                                    <Profile />
                                                  </>
                                                )}
                                              />
                                          </Switch>
                                      </BrowserRouter>
                                   </Grid>
                              </Grid>
                      </Paper>
                  </Grid>
          </Grid>
         </MuiThemeProvider>
    </div>
  );
}

export default App;
