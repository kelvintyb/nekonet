import React from 'react';
import {Modal, Tooltip, Button, OverlayTrigger} from "react-bootstrap"
import EditCatForm from "./EditCatForm";
import base from "../base"
import {findById} from "../utils/helpers"
import "../css/Cat.css"
class Cat extends React.Component {
  constructor(){
    super();
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)

  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

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
      //change className of event.target to filled up heart, and update cat likes
      //use this.props.index for catKey, write func in App.js to updateLikes for the specific cat
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
      messages: {}
    }
    this.context.addChat(newChatKey, chat)
  }
  // <button onClick={(e) => this.removeCat(e)}>Delete Cat</button>
  // <i className="icon-lg ion-android-favorite wow fadeIn" data-wow-delay=".3s"></i>

  render() {
    const {details} = this.props;
    const imageStyle = {
      background: `url(${details.imageUrl}) no-repeat`,
      backgroundSize: `100%`,
      borderRadius: `10px`
    }
    let icons = (<span>Join up to like or adopt cats!</span>);
    if (details.uid === localStorage.getItem("localUser")) {
      icons = (<i className="icon ion-edit wow fadeIn" data-wow-delay=".3s" onClick={this.open}></i>)
    } else if (localStorage.getItem("localUser")) {
      icons = (
                <div>
                  <i className="icon ion-chatboxes wow fadeIn" data-wow-delay=".3s" onClick={(e) => this.createChatroom(e)}> Chat to Adopt!</i><i className="icon ion-android-favorite-outline wow fadeIn" data-wow-delay=".3s">{details.likes}</i>
                </div>
              )
    }
    const tooltip = <Tooltip>Meow! Don't delete me?</Tooltip>
    console.log(details)
    return(
      <div>
        <div className="gallery-item" style={imageStyle}>
          <span className="text-wrapper">
            <span className="name">{details.name}</span>
            <span className="age">{details.age} months old</span>
            {icons}
          </span>
        </div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Your Neko</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditCatForm index={this.props.index} updateCat={this.props.updateCat} />
            <OverlayTrigger overlay={tooltip}>
              <Button bsStyle="danger" onClick={(e) => this.removeCat(e)}>Delete</Button>
            </OverlayTrigger>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="info" onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
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
