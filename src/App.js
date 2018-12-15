import React, {Component, StyleSheet} from 'react';
import logo from './logo.svg';
import './CSS/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactPortfolio from './Components/ReactPortfolio'
import NativePortfolio from './Components/NativePortfolio'
import Button from '@material-ui/core/Button';

class App extends Component {

  state = {
    backgroundToggle: false
  }

  handleBackgroundOn = () => {
    this.setState({backgroundToggle: false})
  }

  handleBackgroundOff = () => {
    this.setState({backgroundToggle: true})
  }

  renderBackgroundSwitch() {
    const {backgroundToggle} = this.state;

    if(backgroundToggle == true) {
      return <Button 
        variant="contained" 
        color="primary" 
        style={{width: 120, margin: 20}}
        className="bg-dark"
        onClick={this.handleBackgroundOn}
      >Switch Off
    </Button>
    } else {
      return <Button 
      variant="contained" 
      color="dark" 
      style={{width: 120, margin: 20}}
      className="bg-light"
      onClick={this.handleBackgroundOff}
    >Switch On
  </Button>
    }
  }
  
  render() {
    const {backgroundToggle} = this.state;
    return (
        <html>


          <body className={backgroundToggle == true ? "App-headerLight" : "App-headerDark"}>

                
                {this.renderBackgroundSwitch()}

          
                <h1 className={backgroundToggle == true ? "h1CodeDark" : "h1CodeLight"} style={{margin: 70}}>Mobile & Web Development.</h1>
                
                <ReactPortfolio />

                <NativePortfolio />
    
                  
            </body>


      </html>
    );
  }
}


let styles = {
  dark: {
    backgroundColor: '#222f3e',
  },
  light: {
    backgroundColor: 'white',

  }
}

export default App;
