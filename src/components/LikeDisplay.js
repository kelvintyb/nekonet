import React from 'react';
import Cat from "./Cat"
import "../css/LikeDisplay.css"
import {filterCollectionByKeys, findById} from "../utils/helpers"

class LikeDisplay extends React.Component {
  render() {
    const localUserRef = localStorage.getItem("localUser");
    let user = findById(localUserRef, this.context.users);
    const userLikeKeyArray = !!user ? Object.keys(user.likeList) : [];
    const userLikeCats = filterCollectionByKeys(userLikeKeyArray, this.context.cats);
    console.log(this.context.users)
    console.log(user)
    console.log(userLikeKeyArray)
    console.log(userLikeCats)
    return (
      <div className="gallery">
        {
          userLikeCats.map(cat => <Cat key={cat.id} index={cat.id} details={cat} updateCat={this.context.updateCat} />)
        }
      </div>
    )
  }
}

LikeDisplay.contextTypes = {
  users: React.PropTypes.object,
  cats: React.PropTypes.object,
  updateCat: React.PropTypes.func,
  router: React.PropTypes.object
}

export default LikeDisplay;
