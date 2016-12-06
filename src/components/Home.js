import React from 'react';
import HeroHeader from "../components/HeroHeader"

class Home extends React.Component {

  render() {
    return (
      <div>
        <HeroHeader />
        <h1>How it Works</h1>
        <p>Explanation of process here</p>
        <p>Try out header links to go to other components</p>

      </div>
    );
  }

}

export default Home;
