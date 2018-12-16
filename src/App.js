import React, {Component, StyleSheet} from 'react';
import logo from './logo.svg';
import './CSS/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactPortfolio from './Components/ReactPortfolio'
import NativePortfolio from './Components/NativePortfolio'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';



class App extends Component {

  state = {
    backgroundToggle: false,
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
      return <IconButton color="primary" style={{backgroundColor: 'white'}}
        className="bg-dark"
        onClick={this.handleBackgroundOn}
      >
    </IconButton>
    } else {
      return <IconButton color="primary" style={{backgroundColor: 'white',}}
      className="bg-dark"
      className="bg-light"
      onClick={this.handleBackgroundOff}
    >
  </IconButton>
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
