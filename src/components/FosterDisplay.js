import React from 'react';
import Cat from "./Cat"
import "../css/FosterDisplay.css"
import {filterCollectionByKeys, findById} from "../utils/helpers"

class FosterDisplay extends React.Component {

  render() {
    const localUserRef = localStorage.getItem("localUser");
    let user = findById(localUserRef, this.context.users);
    console.log(user)
    const userFosterKeyArray = !!user ? Object.keys(user.fosterList) : [];
    const userFosterCats = filterCollectionByKeys(userFosterKeyArray, this.context.cats);

    return (
      <div className="gallery">
        {
          userFosterCats.map(cat => <Cat key={cat.id} index={cat.id} details={cat} updateCat={this.context.updateCat} />)
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
