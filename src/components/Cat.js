import React from 'react';
import EditCatForm from "./EditCatForm"
import base from "../base"
import {findById} from "../utils/helpers"
import "../css/Cat.css"
class Cat extends React.Component {
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
  // function toggleLike(postRef, uid) {
      //use this.props.index for catKey, write func in App.js to updateLikes for the specific cat
      //NOTE: will need to prevent display of add/edit/like buttons for non-users
  //   postRef.transaction(function(post) {
  //     if (post) {
  //       if (post.stars && post.stars[uid]) {
  //         post.starCount--;
  //         post.stars[uid] = null;
  //       } else {
  //         post.starCount++;
  //         if (!post.stars) {
  //           post.stars = {};
  //         }
  //         post.stars[uid] = true;
  //       }
  //     }
  //     return post;
  //   });
  // }
  createChatroom(e){
    const {details} = this.props;
    const catKey = this.props.index;
    let fosterName = findById(details.uid, this.context.users).name
    const newChatKey = base.database().ref().child("chatrooms").push().key;
    const chat = {
      id: newChatKey,
      name: `${details.name} fostered by: ${fosterName}`,
      imageUrl: `${details.imageUrl}`,
      users: {
        [details.uid]: true,
        [this.context.uid]: true
      },
      cat: catKey,
      messages: {} //NOTE: this will likely cause messages to be overwritten if u trigger chat creation here - shld use if/else to check for empty messages which then redirects to chat url if non-empty
    }
    this.context.addChat(newChatKey, chat)
  }
    //will nd to add conditional render of if(this.state.uid == cat.uid) {render edit btn} else if (this.state.uid){render like/adopt btns}, also currOwner shld not be able to chat with own cats
  //const icons : conditional logic for which icons to display
  //use snip 1550 for icon hovers (insert {icons} into jsx) and also put perma-captions that flex to the bottom of the div for details & love icon. http://bootsnipp.com/snippets/v7VyB for modals
  // <button onClick={(e) => this.removeCat(e)}>Delete Cat</button>
  // <EditCatForm index={this.props.index} updateCat={this.props.updateCat} />
  //
  // <a href="typography.html">

  //     <i className="ion-chatboxes" onClick={(e) => this.createChatroom(e)}></i>
  //     <p>Chat</p>
  // </a>
  // <button onClick={(e) => this.createChatroom(e)}>Chat</button>


  // <i className="icon-lg ion-android-favorite wow fadeIn" data-wow-delay=".3s"></i>
  // <i className="icon-lg   ion-android-favorite-outline wow fadeIn" data-wow-delay=".3s"></i>


  render() {
    const {details} = this.props;
    const imageStyle = {
      background: `url(${details.imageUrl}) no-repeat`,
      backgroundSize: `100%`,
      borderRadius: `10px`
    }
    let icons = (<span>Join up to like or adopt cats!</span>);
    if (details.uid === localStorage.getItem("localUser")) {
      icons = (<i className="icon ion-edit wow fadeIn" data-wow-delay=".3s"></i>)
    } else if (localStorage.getItem("localUser")) {
      icons = (
                <div>
                  <i className="icon ion-chatboxes wow fadeIn" data-wow-delay=".3s" onClick={(e) => this.createChatroom(e)}> Chat to Adopt!</i><i className="icon-lg ion-android-favorite-outline wow fadeIn" data-wow-delay=".3s"></i>
                </div>
              )
    }
    console.log(details)
    return(
      <div className="gallery-item" style={imageStyle}>
        <span className="text-wrapper">
          <span className="name">{details.name}</span>
          <span className="age">{details.age} months old</span>
          {icons}
        </span>
      </div>
    )
  }
}
Cat.contextTypes = {
  addChat: React.PropTypes.func,
  uid: React.PropTypes.string,
  users: React.PropTypes.object,
  router: React.PropTypes.object


}
export default Cat;
