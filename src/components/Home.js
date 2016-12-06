import React from 'react';
import HeroHeader from "../components/HeroHeader"

class Home extends React.Component {

  render() {
    return (
      <div>
        <HeroHeader />
        <section id="two" className="main-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2  className="margin-top-0 text-primary"> How it works</h2>
                            <hr  className="primary"></hr>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="feature">
                                <i className="icon-lg ion-android-laptop wow fadeIn" data-wow-delay=".3s"></i>
                                <h3>Scroll</h3>
                                <p className="text-muted">Browse through the amazing cats up for adoption</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="feature">
                                <i className="icon-lg ion-chatboxes wow fadeInUp" data-wow-delay=".2s"></i>
                                <h3>Connect</h3>
                                <p className="text-muted">Communicate with the owner or fosterer through our in app chat </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="feature">
                                <i className="icon-lg ion-heart wow fadeIn" data-wow-delay=".3s"></i>
                                <h3>Adopt</h3>
                                <p className="text-muted">Once approved, get ready to love and be loved by your new furry friend</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

      </div>
    );
  }

}

export default Home;
