//About Us / Contact Details static page
import React from 'react';
import "../css/About.css";

class About extends React.Component {

  render() {
    return (
      <div>
        <div className='about'>
          <h1>About Us</h1>
            <p>NekoNet is a cat adoption portal brought to your doorstep. We are an organisation committed to finding good homes for these adorable kittens. We are unaffiliated, volunteer-driven, non-competitive and we want to to join hands with like-minded organizations, pet owners and volunteers to ensure all our cats find happy homes.</p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="page-header">Our Team</h2>
          </div>
          <div className="col-lg-4 col-sm-6 text-center">
            <img className="img-circle img-responsive img-center" src="http://placehold.it/200x200" alt="" />
              <h3>Kelvin Tan
                <small className="text">Main Designer</small>
              </h3>
              <p>Dude who loves cats and loves code!</p>
          </div>
          <div className="col-lg-4 col-sm-6 text-center">
            <img className="img-circle img-responsive img-center" src="http://placehold.it/200x200" alt="" />
              <h3>Henson Tay
                <small className="text">Architect</small>
              </h3>
              <p>Cool dude who loves front-end web development and whose hair game is always on point!</p>
          </div>
          <div className="col-lg-4 col-sm-6 text-center">
            <img className="img-circle img-responsive img-center" src="http://placehold.it/200x200" alt="" />
              <h3>Jeshua Chong
                <small className="text">Team Member</small>
              </h3>
              <p>....!</p>
          </div>
      </div>
    </div>
    );
  }

}

export default About;
