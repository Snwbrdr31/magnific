import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import magnificlogo from '../images/magnificlogo.png';

const Home = () => (

    <div id ="bg" className="row body_width">
      <h1 className='center'><b className='home_title'>MAGNIFIC DISPLAYS</b></h1><br />
    </div>

      );
// Listed below is the flickity crousel if needed for new items //
//
//           <div className="carousel container js-flickity"
//              '{ "lazyLoad": true, "autoPlay": 1800,
//              data-flickity-options=
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
