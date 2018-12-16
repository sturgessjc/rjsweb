
import React, {Component} from 'react';
import './CSS/App.css';
import ReactPortfolio from './Components/ReactPortfolio'
import NativePortfolio from './Components/NativePortfolio'
import IconButton from '@material-ui/core/IconButton';
import AppSource from './Components/AppSource'


class App extends Component {

  state = {
    backgroundToggle: false,
    sourceCode: true
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
          <body style={{paddingTop: '10%'}}className={backgroundToggle == true ? "App-headerLight" : "App-headerDark"}>
                {this.renderBackgroundSwitch()}
                <h1 className={backgroundToggle == true ? "h1CodeDark" : "h1CodeLight"} style={{margin: 70}}>Mobile & Web Development.</h1>
                <NativePortfolio />
                <ReactPortfolio />

                <AppSource />
                
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
