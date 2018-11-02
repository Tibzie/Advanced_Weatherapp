import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody } from 'reactstrap';

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <div className="thank-you">Thank you for using our application!</div>
         <div className="footer">
           <div className="row">
             <div className="follow-us">
             <h2>Follow us on:</h2>
               <div className="social-media-icons">
                 <a href="/" target="_blank"><img className="img-fluid" src="./facebook.png" alt="facebook"/></a>
                 <a href="/" target="_blank"><img className="img-fluid" src="./twitter.png" alt="twitter"/></a>
                 <a href="/" target="_blank"><img className="img-fluid" src="./instagram.png" alt="instagram"/></a>
               </div>
             </div>
           </div>
           <div className="mentioning-api">
             In order to get relevant and updated data, an API was used<br />
             <Button color="info" onClick={this.toggle}>Click me{this.props.buttonLabel}</Button> to find out which one.
             <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
               <ModalHeader toggle={this.toggle}>API name: OpenWeatherMap</ModalHeader>
               <ModalBody>
                 <strong>Description:</strong><br />
                 An exceptionally helpful and easy to use API that made it possible to create this application. For more information
                 visit their website: <a href="https://openweathermap.org/">Link to the API</a>
               </ModalBody>
             </Modal>
           </div>
           <div className="copyright">Copyright, AWP - Awesome Weather Pal / 2018 </div>


         </div>

      </div>

    );
  }
}

export default Follow;
