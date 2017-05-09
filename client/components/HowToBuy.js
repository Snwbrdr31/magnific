import React from 'react';
import { link } from 'react-router';
import { connect } from 'react-redux';
import logoTASslides from '../images/logoTASslides.png';
import ProfessionalImage from '../images/ProfessionalImage.jpg';


class HowToBuy extends React.Component {

  render() {
    return(
      <div className="body_width howtobuy container">
        <div className="responsive purchase_title">
        <h2 className="center"><b className="purchase_title">Our Retailers</b></h2><hr />
        </div>
          <div className="row center">
            <div className="col s12 m6">
              <div className="center how_to_title">
                <h2>United States</h2>
              </div>
                <div >
                  <div className="white" >
                    <div className="center z-depth-5">
                    <a href="http://www.pro-image.com"><img className="responsive-img" src={ProfessionalImage} /></a>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col s12 m6" >
              <div className="center how_to_title">
                <h2>Canada</h2>
              </div>
              <div className="white" >
                <div className="center z-depth-5">
                  <a href="http://www.tasfilms.com"><img className="responsive-img" src={logoTASslides} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default HowToBuy;
