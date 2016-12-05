import React from 'react';
import Cat from "./Cat"

class CatIndex extends React.Component {

  render() {
    return (
      <ul className="list-of-cats">
        {
          Object.keys(this.context.cats)
                .map(key => <Cat key={key} index={key} details={this.context.cats[key]} updateCat={this.context.updateCat} />)
        }
      </ul>
    );
  }
}

CatIndex.contextTypes = {
  cats: React.PropTypes.object,
  updateCat: React.PropTypes.func
}

export default CatIndex;
