import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import magnificlogo from '../images/magnificlogo.png';

class MaterialNavbar extends React.Component {


componentDidMount() {
  $(".button-collapse").sideNav({
    edge: 'right',
    closeOnClick: true,
  });
}

  render() {
    return(
      <header>
        <nav className="nav-extended">
          <nav id='nav' className="grey darken-4">
            <div className='nav-wrapper'>
              <Link to='/'><img src={magnificlogo} className='left nav-logo'/></Link>
              <Link to='/'><link id="phone" className="phone_number" />1-800-721-9088</Link>
              <a href="#" data-activates="mobile-demo" className="right button-collapse"><i className="material-icons nav_menu_icon">M E N U</i></a>
              <ul id="nav-mobile" className='right hide-on-med-and-down'>
                <li><Link to='/about_us'>A B O U T - M A G N I F I C</Link></li>
                <li><Link to='/products'>P R O D U C T S</Link></li>
                <li><Link to='/demos'>D E M O S</Link></li>
                <li><Link to='/how_to_buy'>H O W - T O - B U Y</Link></li>
                <li><Link to='/'>H O M E</Link></li>
              </ul>
                <ul className="side-nav" id="mobile-demo">
                <li><Link to='/about_us'>A B O U T - M A G N I F I C</Link></li>
                <li><Link to='/products'>P R O D U C T S</Link></li>
                <li><Link to='/demos'>D E M O S</Link></li>
                <li><Link to='/how_to_buy'>H O W - T O - B U Y</Link></li>
                <li><Link to='/'>H O M E</Link></li>
              </ul>
            </div>
          </nav>
        </nav>
      </header>
    );
  }
}

export default connect()(MaterialNavbar);
