import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Login from './Components/Login';
import Main from './Components/Main';

class App extends Component{

  constructor() {
    super()

    this.state= {
      username:"",
      password:"",
      loggedIn: false,
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  handleSubmit =(e) =>{
    e.preventDefault()
    this.setState({
      loggedIn: true,
    })
  }

  handleLogout =(e) =>{
    e.preventDefault()
    this.setState({
      loggedIn: false,
    })
  }

  render() {
  return (
    <div className="App"> 
      {this.state.loggedIn ?      
        <Main 
          username = {this.state.username} 
          handleLogout= {this.handleLogout} />
        :
        <Login 
          handleChange = {this.handleChange}  
          handleSubmit = {this.handleSubmit}
      /> }

    </div>

  );}
}

export default App;
