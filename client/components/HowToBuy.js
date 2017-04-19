import React from 'react';
import { link } from 'react-router';
import { connect } from 'react-redux';
import logoTASslides from '../images/logoTASslides.png';
import ProfessionalImage from '../images/ProfessionalImage.jpg';

class HowToBuy extends React.Component {

  render() {
    return(
      <div>
        <h4 className="center how_to_buy">Where to Purchase our products</h4>
        <br>
        </br>

          <div className="row container">
            <div className="col s12 m6">
              <div className="center">
                <h3>United States</h3>
              </div>
              <p className="z-depth-3"></p>
                <div className='card blue-grey darken-1'>
                  <div className="card-image ">
                    <a href="http://www.pro-image.com"><img src={ProfessionalImage} /></a>
                  </div>
                </div>
            </div>

            <div className="col s12 m6">
              <div className="center">
                <h3>Canada</h3>
              </div>
              <div className='card blue-grey darken-1'>
                <div className="card-image white">
                  <a href="http://www.tasfilms.com"><img src={logoTASslides}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default HowToBuy;
