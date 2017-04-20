import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Base from '../images/Base.jpg';
import Edge from '../images/Edge.jpg';
import Mod from '../images/Mod.jpg';
import Pro from '../images/Pro.jpg';
import Tek from '../images/Tek.jpg';
import Uleds from '../images/Uleds.jpg';



// Need to fix errors
// need to get working carousel running and include a link to that product from picture.
// need descrition of what needs to be said below the carousel

const Home = () => (

        <div className="row body_width home_page">
          <h1 className='center'><b className='home_title'>Magnific Displays</b></h1><br />
        </div>

      );
// Listed below is the flickity crousel if needed for new items //
//
//           <div className="carousel container js-flickity"
//              data-flickity-options=
//              '{ "lazyLoad": true, "autoPlay": 1800,
//               "pauseAutoPlayOnHover": true,
//               "adaptiveHeight": true,"pageDots":
//               true}'>
//             <img className="carousel-cell-image"
//               data-flickity-lazyload={Base} alt="image"/>
//             <img className="carousel-cell-image"
//               data-flickity-lazyload={Edge} />
//             <img className="carousel-cell-image"
//               data-flickity-lazyload={Mod} />
//             <img className="carousel-cell-image"
//               data-flickity-lazyload={Pro}/>
//             <img className="carousel-cell-image"
//               data-flickity-lazyload={Tek} />
//             <img className="carousel-cell-image"
//               data-flickity-lazyload={Uleds} />



export default Home;
