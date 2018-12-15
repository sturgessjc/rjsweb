import React, {Component} from 'react';
import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';

class NativePortfolio extends Component {

  state = {
    showReactNative: false
  }

  handleClick = () => {this.setState({showReactNative: false})}
  handleClickFalse = () => {this.setState({showReactNative: true})}

  renderReactNative() {
    const {showReactNative} = this.state;
    return (
      <div style={{flex: 1}}>
            {showReactNative == true 
              ? 
              <div>
                
                <Button 
                    variant="contained" color="primary" 
                    style={{width: 140, margin: 20, color: 'black'}}
                    className="bg-white"
                    onClick={this.handleClick}
                    >ReactNative
                </Button>

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                        <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/BmjnazkhRUH/embed/captioned/?cr=1&amp;v=9&amp;wp=508&amp;rd=http%3A%2F%2Fconorsturgess.com&amp;rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A264.59999999860884%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="362" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" className="instaClass"></iframe>
                        </div>
                        <div class="col-sm">
                        <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/BmjnazkhRUH/embed/captioned/?cr=1&amp;v=9&amp;wp=508&amp;rd=http%3A%2F%2Fconorsturgess.com&amp;rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A264.59999999860884%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="362" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" className="instaClass"></iframe>
                        </div>
                        <div class="col-sm">
                        <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/BmjnazkhRUH/embed/captioned/?cr=1&amp;v=9&amp;wp=508&amp;rd=http%3A%2F%2Fconorsturgess.com&amp;rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A264.59999999860884%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="362" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" className="instaClass"></iframe>

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
                    style={{width: 140, margin: 20, color: 'black'}}
                    className="bg-white"
                    onClick={this.handleClickFalse}
              >ReactNative
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




export default NativePortfolio;

