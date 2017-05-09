import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Modal from './Modal';
import Base from '../images/Base.png';
import Edge from '../images/Edge.png';
import Mod from '../images/Mod.png';
import Pro from '../images/Pro.png';
import Tek from '../images/Tek.png';
import Uleds from '../images/Uleds.png';

class Products extends React.Component {
  render() {
   return(

    <div className="container">
      <h1 className='center about_products'><b className='product_title'>PRODUCTS</b></h1><hr /><br />
        <br />
       <div className="row">
          <div className="col s12 m6">
            <div className="card z-depth-5">
              <div className="card-image">
                <img src={Base} />
              </div>
              <div className="card-action center z-depth-5">
                <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIARVVsd3pTQ2lETzQ">Specs</a>
                <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIANEpheGRNdlZuR1k">Template</a>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card z-depth-5">
              <div className="card-image">
                <img src={Edge} />
              </div>
              <div className="card-action center z-depth-5">
                <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAcldLcUdBUWpvUnM">Specs</a>
                <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIANEpheGRNdlZuR1k">Template</a>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card z-depth-5">
              <div className="card-image">
                <img src={Mod} />
              </div>
              <div className="card-action center z-depth-5">
                <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAeDM3YmtWXzc0NFk">Specs</a>
                <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIANU1lTnZWUkpiYUU">Template</a>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card z-depth-5">
              <div className="card-image">
                <img src={Pro} />
              </div>
              <div className="card-action center z-depth-5">
                <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIASzhkQW1CWDY3bzA">Specs</a>
                <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAUUdRWER1MF9MT0k">Template</a>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card z-depth-5">
              <div className="card-image">
                <img src={Tek} />
              </div>
              <div className="card-action center z-depth-5">
                <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAOXhrREFoaldMNWM">Specs</a>
                <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAUUdRWER1MF9MT0k">Template</a>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card z-depth-5">
              <div className="card-image">
                <img src={Uleds} />
              </div>
              <div className="card-action center z-depth-5">
                <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAZ0FuX3hrRnBJOFE">Template</a>
              </div>
            </div>
          </div>
        </div>
      </div>
   );
 }
}
export default Products;
