import React from 'react';
import "../css/HeroHeader.css"

class HeroHeader extends React.Component {

  render() {
    return (
      <div className="hero-header-home">
        <div className="inner-text">
          <p>Net a Neko!</p>
        </div>
        <div style={{clear:"both"}}></div>
        
      </div>
    );
  }

}

export default HeroHeader;
