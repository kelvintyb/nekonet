import React from 'react';
import "../css/Footer.css"

class Footer extends React.Component {

  render() {
    return (
      <div>
        <footer id="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-6 col-sm-3 column">
                    <h4>Information</h4>
                    <ul className="list-unstyled">
                        <li><a href="">Products</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Benefits</a></li>
                        <li><a href="">Developers</a></li>
                    </ul>
                </div>
                <div className="col-xs-6 col-sm-3 column">
                    <h4>About</h4>
                    <ul className="list-unstyled">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                    </ul>
                </div>
                <div className="col-xs-12 col-sm-3 column">
                    <h4>Stay Posted</h4>
                    <form>
                        <div className="form-group">
                          <input type="text" className="form-control" title="No spam, we promise!" placeholder="Tell us your email"/>
                        </div>
                        <div className="form-group">
                          <button className="btn btn-primary" data-toggle="modal" data-target="#alertModal" type="button">Subscribe for updates</button>
                        </div>
                    </form>
                </div>
                <div className="col-xs-12 col-sm-3 text-right">
                    <h4>Follow</h4>
                    <ul className="list-inline">
                      <li><a rel="nofollow" href="" title="Twitter"><i className="icon-lg ion-social-twitter-outline"></i></a>&nbsp;</li>
                      <li><a rel="nofollow" href="" title="Facebook"><i className="icon-lg ion-social-facebook-outline"></i></a>&nbsp;</li>
                      <li><a rel="nofollow" href="" title="Dribble"><i className="icon-lg ion-social-dribbble-outline"></i></a></li>
                    </ul>
                </div>
            </div>
            <br/>
            <span className="pull-right text-muted small"><a href="http://nekonet.herokuapp.com/">Nekonet</a> ©2016</span>
        </div>
    </footer>

      </div>
    );
  }

}

export default Footer;
