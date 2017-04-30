import React from 'react';
import { link } from 'react-router';
import { connect } from 'react-redux';
import logoTASslides from '../images/logoTASslides.png';
import ProfessionalImage from '../images/ProfessionalImage.jpg';

class HowToBuy extends React.Component {

  render() {
    return(
      <div className="body_width howtobuy">
        <h2 className="center purchase"><b className="Purchase_title">Where to Purchase our products</b></h2><hr /><br />

        <br>
        </br>

          <div className="row container">
            <div className="col s12 m6" style={{width:'50%'}}>
              <div className="center how_to_title">
                <h3>United States</h3>
              </div>
                <div >
                  <div className="" style={{height: '400px'}}>
                    <a href="http://www.pro-image.com"><img src={ProfessionalImage} style={{height: '170px', width:'500px'}}/></a>
                  </div>
                </div>
            </div>

            <div className="col s12 m6" style={{width:'40%', marginLeft:'100px'}}>
              <div className="center how_to_title">
                <h3>Canada</h3>
              </div>
              <div className=''>
                <div className="white" style={{height:'170px'}}>
                  <a href="http://www.tasfilms.com"><img src={logoTASslides} style={{height: '170px', marginLeft:'20px'}}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default HowToBuy;
