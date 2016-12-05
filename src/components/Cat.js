import React from 'react';
import EditCatForm from "./EditCatForm"
import base from "../base"

class Cat extends React.Component {

  //may need to refactor out delete function/button into parent component if Cat component is purely functional

  //will nd to add conditional render of if(this.state.uid == cat.uid) {render edit btn} else if (this.state.uid){render like/adopt btns}

  removeCat(e){
    e.preventDefault();
    const catKey = this.props.index
    //grab app info from firebase using root ref
    const database = base.database().ref();
    //query firebase once for cats snapshot
    database.child("/cats").child(catKey).once("value", (snapshot) => {
      const cat = snapshot.val();
      const catFoster = cat.uid
      const removeData = {
        [`cats/${catKey}`] : null,
        [`users/${catFoster}/fosterList/${catKey}`] : null
      };
      database.update(removeData);
    })
  }
  render() {
    const {details} = this.props;
    return(
      <li className="menu-cat">
        <img src={details.imageUrl} alt={details.name} />
        <h3 className="cat-name">
          {details.name}
          <span className="status">{details.status}</span>
        </h3>
        <p>{details.age} months old</p>
        <button onClick={(e) => this.removeCat(e)}>Delete Cat</button>
        <EditCatForm index={this.props.index} updateCat={this.props.updateCat} />
      </li>
      )
  }

}

export default Cat;
