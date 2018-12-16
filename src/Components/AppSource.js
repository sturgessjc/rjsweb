import React, {Component} from 'react';
import '../CSS/App.css';

const curlO = '{'
const curlC = '}'
const tagO = '<'
class AppSource extends Component {

    render() {

    return (
     <div style={{margin: '10%', paddingLeft: '2%', paddingTop: '2%', paddingBottom: '2%', backgroundColor: '#2C3A47'}} className="">
        <p className="pCodeSource">import React, {curlO}Component, StyleSheet} from 'react';</p>
        <p className="pCodeSource">import logo from './logo.svg';</p>
        <p className="pCodeSource">import './CSS/App.css';</p>
        <p></p>
        <p className="pCodeSource">class App extends Component {curlO}</p>
        <p className="pCodeSource" style={{paddingLeft: '5%'}}>render() {curlO}</p>
        <p className="pCodeSource" style={{paddingLeft: '10%'}}>return (</p>
        <p className="pCodeSource" style={{paddingLeft: '15%'}}>{tagO}html></p>
        <p className="pCodeSource" style={{paddingLeft: '20%'}}>{tagO}body className={curlO}backgroundToggle == true ? "App-headerLight" : "App-headerDark"}></p>
        <p className="pCodeSource" style={{paddingLeft: '25%'}}>{curlO}this.renderBackgroundSwitch()}</p>
        <p className="pCodeSource"style={{paddingLeft: '25%'}}>{tagO}h1 className={curlO}backgroundToggle == true ? "h1CodeDark" : "h1CodeLight"} style={curlO}{curlO}margin: 70}}>Mobile & Web Development.{tagO}/h1></p>
        <p className="pCodeSource" style={{paddingLeft: '25%'}}>{tagO}NativePortfolio /></p>
        <p className="pCodeSource" style={{paddingLeft: '25%'}}>{tagO}ReactPortfolio /></p>
        <p className="pCodeSource" style={{paddingLeft: '25%'}}>{tagO}SourceCode /></p>
        <p className="pCodeSource" style={{paddingLeft: '20%'}}>{tagO} /body></p>
        <p className="pCodeSource" style={{paddingLeft: '15%'}}>{tagO} /html></p>
        <p className="pCodeSource" style={{paddingLeft: '10%'}}>);</p>
        <p className="pCodeSource" style={{paddingLeft: '7%'}}>}</p>
        <p className="pCodeSource" style={{paddingLeft: '5%'}}>}</p>



     </div>
     );
  }
}




export default AppSource;