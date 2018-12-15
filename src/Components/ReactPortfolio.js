import React, {Component} from 'react';
import '../CSS/App.css';
import Button from '@material-ui/core/Button';

class ReactPortfolio extends Component {

  state = {
    showReactNative: false
  }
  

  handleClick = () => {this.setState({showReactNative: false})}
  handleClickFalse = () => {this.setState({showReactNative: true})}

  renderReactNative() {
    const {showReactNative} = this.state;
    return (
      <div>
            {showReactNative == true 
              ? 
              <div>
                
                <Button 
                    variant="contained" color="primary" 
                    style={{width: 140, margin: 20}}
                    className="bg-info"
                    onClick={this.handleClick}
                  >ReactJS.
                </Button>

      


                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                        <iframe  class="instagram-media instagram-media-rendered" src="https://www.instagram.com/p/BmJan6aHBfC/embed" allowtransparency="true" allowfullscreen="true" frameborder="0" height="362" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" className="instaClass"></iframe>
                        </div>
                        <div class="col-sm">
                        <iframe  class="instagram-media instagram-media-rendered" src="https://www.instagram.com/p/BmJml-AD49k/embed" allowtransparency="true" allowfullscreen="true" frameborder="0" height="362" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" className="instaClass"></iframe>
                        </div>
                        <div class="col-sm">
                        <iframe  class="instagram-media instagram-media-rendered" src="https://www.instagram.com/p/BpSpg5ehQKt/embed" allowtransparency="true" allowfullscreen="true" frameborder="0" height="362" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" className="instaClass"></iframe>
                        </div>
                    </div>
                    </div>
              </div>
         
            :
            null
            }
            {showReactNative == true ?
            <p></p>
            :
            <div>  
                <Button 
                    variant="contained" color="primary" 
                    style={{width: 140, margin: 20}}
                    className="bg-info"
                  onClick={this.handleClickFalse}
              >ReactJS.
            </Button>
          </div>   
          }
      </div>
    )
  }

  render() {



    return (
     <div>
                {this.renderReactNative()}
     </div>
   


    );
  }
}




export default ReactPortfolio;

