import React from 'react';
import BaseEdgeTemp from '../images/BaseEdgeTemp.jpg';

class BaseTemplate extends React.Component {
  render() {
    return(
      <div className="base_template">
        <img src={BaseEdgeTemp} />
      </div>
    );
  }
}

export default BaseTemplate;
