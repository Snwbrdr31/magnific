import React from 'react';
import { link } from 'react-router';
import { connect } from 'react-redux';
import logoTASslides from '../images/logoTASslides.png';
import ProfessionalImage from '../images/ProfessionalImage.jpg';

class HowToBuy extends React.Component {

  render() {
    return(
      <div className="body_width howtobuy grey lighten-3">
        <h2 className="center purchase"><b className="Purchase_title">Where to Purchase our products</b></h2><hr /><br />

        <br>
        </br>

          <div className="row container">
            <div className="col s12 m6">
              <div className="center how_to_title">
                <h3>United States</h3>
              </div>
              <p className="z-depth-3"></p>
                <div className='card style_pro'>
                  <div className="card-image pro_image ">
                    <a href="http://www.pro-image.com"><img src={ProfessionalImage} /></a>
                  </div>
                </div>
            </div>

            <div className="col s12 m6">
              <div className="center how_to_title">
                <h3>Canada</h3>
              </div>
              <div className='card style_tas'>
                <div className="card-image white tas_film">
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
