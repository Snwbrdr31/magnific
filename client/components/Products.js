import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Modal from './Modal';
import Base from '../images/Base.jpg';
import Edge from '../images/Edge.jpg';
import Mod from '../images/Mod.jpg';
import Pro from '../images/Pro.jpg';
import Tek from '../images/Tek.jpg';
import Uleds from '../images/Uleds.jpg';
import EdgeSpec from '../images/EdgeSpec.jpg';
import BaseEdgeTemp from '../images/BaseEdgeTemp.jpg'


// need to list all products
// once clicked neeeds to show individual product and specsheet and function as link.



class Products extends React.Component {
  componentDidMount() {
    /// Jquery Plugin ////
    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('#modal1').modal();
      $('#modal2').modal();
      $('.materialboxed').materialbox();
    });
  }
  render() {
    return(
      <div className="center header">
        <h1>PRODUCTS</h1>
        <br/>
        <div className="row container">
          <div className="col s6">
            <div className="card horizontal">
              <div className="card-image">
                <img src={Base}/>
              </div>
              <div className="card-content">
              </div>
                <div className="card-action">
                // Modal Trigger ///
                  <a className="waves-effect waves-light btn" href="#modal1">Specsheets</a>
                // Modal Structure ///
                  <div id="modal1" className="modal">
                    <div className="modal-content">
                    /* need to add BaseSpec.jpg
                      <img src={EdgeSpec}/> */
                    </div>
                    <div className="modal-footer">
                      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                  </div>
                  /// Modal code ended.
                </div>
                <div className="card-action">
                  <button data-target="modal2" className="btn">Template</button>
                  <div id="modal2" className="modal modal-fixed-footer">
                    <div className="modal-content">
                      <div>
                      <img src={BaseEdgeTemp}/>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">close</a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
              <div className="col s6">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={Edge}/>
                  </div>
                  <div className="card-content">
                  </div>
                  <div className="card-action center">
                    <a img className="materialboxed" width="650" src={EdgeSpec} className="waves-effect waves-light btn">Specsheets</a>
                  </div>
                  <div className="card-action center">
                    <a className="waves-effect waves-light btn">Template</a>
                  </div>
                </div>
              </div>
              <div className="col s6">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={Mod}/>
                  </div>
                  <div className="card-content">
                  </div>
                  <div className="card-action center">
                    <a className="waves-effect waves-light btn">Specsheets</a>
                  </div>
                  <div className="card-action center">
                    <a className="waves-effect waves-light btn">Template</a>
                  </div>
                </div>
              </div>
              <div className="col s6">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={Pro}/>
                  </div>
                  <div className="card-content">
                  </div>
                  <div className="card-action center">
                    <a className="waves-effect waves-light btn">Specsheets</a>
                  </div>
                  <div className="card-action center">
                    <a className="waves-effect waves-light btn">Template</a>
                  </div>
                </div>
              </div>
              <div className="col s6">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={Tek}/>
                  </div>
                  <div className="card-content">
                  </div>
                  <div className="card-action center">
                    <a className="waves-effect waves-light btn">Specsheets</a>
                  </div>
                  <div className="card-action center">
                    <a className="waves-effect waves-light btn">Template</a>
                  </div>
                </div>
              </div>
              <div className="col s6">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={Uleds}/>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                    </div>
                    <div className="card-action center">
                      <a className="waves-effect waves-light btn">Specsheets</a>
                    </div>
                    <div className="card-action center">
                      <a className="waves-effect waves-light btn">Template</a>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>


    );
  }
}
export default Products;
