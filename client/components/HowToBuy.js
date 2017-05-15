import React from 'react';
import { link } from 'react-router';
import { connect } from 'react-redux';
import logoTASslides from '../images/logoTASslides.png';
import ProfessionalImage from '../images/ProfessionalImage.jpg';


const HowToBuy = () => (
      <div id="how-back" className="row body_width">
        <div className='col s12'>
          <div id="content-container" className="container">
            <div id="content-how"></div>
              <div id="content">
                <h1 className="center"><b className="purchase_title">Our Retailers</b></h1><hr />
                <div>

                <div className="col s12 m6">
                  <div className="center how_to_title">
                    <h4>United States</h4>
                  </div>
                  <div className="white" >
                    <div className="center z-depth-5">
                      <a href="http://www.pro-image.com"><img className="responsive-img" src={ProfessionalImage} /></a>
                    </div>
                  </div>
                </div>

                <div className="col s12 m6" >
                  <div className="center how_to_title">
                    <h4>Canada</h4>
                  </div>
                  <div className="white" >
                    <div className="center z-depth-5">
                      <a href="http://www.tasfilms.com"><img className="responsive-img" src={logoTASslides} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)

export default HowToBuy;
