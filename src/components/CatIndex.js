import React from 'react';
import Cat from "./Cat"

class CatIndex extends React.Component {

  render() {
    return (
      <ul className="list-of-cats">
        {
          Object.keys(this.props.cats)
                .map(key => <Cat key={key} index={key} details={this.props.cats[key]} updateCat={this.props.updateCat} />)
        }
      </ul>
    );
  }

}

export default CatIndex;
