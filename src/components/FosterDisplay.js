import React from 'react';
import Cat from "./Cat"
import "../css/CatDisplay.css"
import {filterCollectionByKeys, findById} from "../utils/helpers"

class FosterDisplay extends React.Component {

  render() {
    const localUserRef = localStorage.getItem("localUser");
    let user = findById(localUserRef, this.context.users);
    const userFosterKeyArray = !!user ? Object.keys(user.fosterList) : [];
    const userFosterCats = filterCollectionByKeys(userFosterKeyArray, this.context.cats);

    return (
      <div className="gallery">
        {
          Object.keys(userFosterCats)
          .map(key => <Cat key={key} index={key} details={userFosterCats[key]} updateCat={this.context.updateCat} />)
        }
      </div>
    )
  }
}
FosterDisplay.contextTypes = {
  users:React.PropTypes.object,
  cats: React.PropTypes.object,
  updateCat: React.PropTypes.func,
  router: React.PropTypes.object
}
export default FosterDisplay;
