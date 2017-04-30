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
class Products extends React.Component {
  render() {
   return(
     <div className="center header">
         <h1 className='center about_products'><b className='product_title'>PRODUCTS</b></h1><hr /><br />
       <br/>
       <div className="row container">
         <div className="col s6">
           <div className="card z-depth-5">
             <div className="card-image">
               <img src={Base} style={{height:'400px', width:'490px'}}/>
             </div>
             <div className="card-content">
             </div>
               <div className="card-action">
                 <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIARVVsd3pTQ2lETzQ">Specsheets</a>
                 <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIANEpheGRNdlZuR1k">Template</a>
               </div>
               <div className="card-action">
               </div>
           </div>
         </div>
         <div className="col s6">
           <div className="card z-depth-5">
             <div className="card-image">
               <img src={Edge} style={{height:'400px', width: '400px', marginLeft:'40px'}}/>
             </div>
             <div className="card-content">
             </div>
               <div className="card-action">
                 <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAcldLcUdBUWpvUnM">Specsheets</a>
                 <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIANEpheGRNdlZuR1k">Template</a>
               </div>
               <div className="card-action">
               </div>
           </div>
         </div>
         <div className="col s6">
           <div className="card z-depth-5">
             <div className="card-image">
               <img src={Mod} style={{height:'400px', width: '500px'}}/>
             </div>
             <div className="card-content">
             </div>
               <div className="card-action">
                 <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAeDM3YmtWXzc0NFk">Specsheets</a>
                 <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIANU1lTnZWUkpiYUU">Template</a>
               </div>
               <div className="card-action">

               </div>
           </div>
         </div>
         <div className="col s6">
           <div className="card z-depth-5">
             <div className="card-image">
               <img src={Pro} style={{height:'400px', width: '500px'}}/>
             </div>
             <div className="card-content">
             </div>
               <div className="card-action">
                 <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIASzhkQW1CWDY3bzA">Specsheets</a>
                 <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAUUdRWER1MF9MT0k">Template</a>
               </div>
               <div className="card-action">

               </div>
           </div>
         </div>
         <div className="col s6">
           <div className="card z-depth-5">
             <div className="card-image">
               <img src={Tek} style={{height:'400px', width: 'auto'}}/>
             </div>
             <div className="card-content">
             </div>
               <div className="card-action">
                 <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAOXhrREFoaldMNWM">Specsheets</a>
                 <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAUUdRWER1MF9MT0k">Template</a>
               </div>
               <div className="card-action">

               </div>
           </div>
         </div>
         <div className="col s6">
           <div className="card z-depth-5">
             <div className="card-image">
               <img className='center' src={Uleds} style={{height:'400px', width: '430px', marginLeft:'40px'}}/>
             </div>
             <div className="card-content">
             </div>
               <div className="card-action">
                 <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAZ0FuX3hrRnBJOFE">Specsheets</a>
                 <a className="waves-effect waves-light btn" href="https://drive.google.com/open?id=0BzAF7TQQwMIAZ0FuX3hrRnBJOFE">Template</a>
               </div>
               <div className="card-action">

               </div>
              </div>
            </div>
        </div>
     </div>
   );
 }
}
export default Products;
