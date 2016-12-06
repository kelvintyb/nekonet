import React from 'react';
import "../css/HeroHeader.css"

class HeroHeader extends React.Component {

  render() {
    return (
      <div className="hero-header-home">
        <header id="first">
        <div className="header-content">
            <div className="inner">
                <h1 className="cursive">Adopt a cat or kitten today!</h1>
                <h4>Cuddly furry companions are ready to love and be loved.</h4>
                <hr></hr>
               <a href="#one" className="btn btn-primary btn-xl page-scroll">Get Started</a>
            </div>
        </div>
        <video autoPlay="true" loop="true" className="fillWidth fadeIn wow collapse in" data-wow-delay="0.5s" poster="https://s3-us-west-2.amazonaws.com/coverr/poster/Traffic-blurred2.jpg" id="video-background" src="../media/nekobg.mp4" type="video/mp4">
            // <source  type="video/mp4"/>
        </video>
    </header>

      </div>
    );
  }

}

export default HeroHeader;
