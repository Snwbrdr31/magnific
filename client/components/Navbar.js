import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import magnificlogo from '../images/magnificlogo.png';

class MaterialNavbar extends React.Component {
  render() {
    return(
      <header>
          <div className='nav-fixed'>
            <nav id='nav' className='grey darken-3'>
              <div className='nav-wrapper'>
                <Link to='/'><img src={magnificlogo} className='nav-logo'/></Link>
                <ul className='right'>
                  <li><Link to='/about_us'>A B O U T - M A G N I F I C</Link></li>
                  <li><Link to='/'>H O M E</Link></li>
                  <li><Link to='/products'>P R O D U C T S</Link></li>
                  <li><Link to='/demos'>D E M O S</Link></li>
                  <li><Link to='/how_to_buy'>H O W - T O - B U Y</Link></li>
                </ul>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons nav_menu_icon">menu</i></a>
                  <ul className='right hide-on-med-and-down'>
                  </ul>
                  <ul className='side-nav' id='mobile-demo'>
                  </ul>
              </div>
            </nav>
          </div>
      </header>
    );
  }
}

export default connect()(MaterialNavbar);
