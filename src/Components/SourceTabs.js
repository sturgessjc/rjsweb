import React, {Component} from 'react';
import '../CSS/App.css';
import Button from '@material-ui/core/Button';

class ReactPortfolio extends Component {

    render() {

    return (
     <div>
         <ul class="nav nav-tabs" style={{ position: 'absolute'}}>
         <li class="nav-item">
            <p class="nav-link active" href="#">Active</p>
         </li>
         <li class="nav-item">
            <p class="nav-link" href="#">Link</p>
         </li>
         <li class="nav-item">
            <p class="nav-link" href="#">Link</p>
         </li>
         <li class="nav-item">
            <p class="nav-link" href="#">Disabled</p>
         </li>
         </ul>
      </div>
     );
  }
}




export default ReactPortfolio;

