import React, { Component } from 'react';
import Header from "./components/Header"
import Cat from "./components/Cat"
import AddCatForm from "./components/AddCatForm"
import base from "./base"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.addCat = this.addCat.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      //this is for detection of logged in user
      uid: null,
      //cats 
      cats: {
        cat1: {
          name: "Kinder",
          color: "tabby",
          age: "1",
          isForAdoption: true,
          imageUrl: "http://www.catwelfare.org/sites/default/files/imagecache/adpt_thumbnail_large/adoptions/kinder5.jpg",
          user_id: 1
        },
        cat2: {
          name: "NotByUser",
          color: "white",
          age: "3",
          isForAdoption: true,
          imageUrl: "http://www.catwelfare.org/sites/default/files/imagecache/adpt_thumbnail_large/adoptions/kinder5.jpg",
          user_id: 2
        },
        cat3: {
          name: "Faust",
          color: "others",
          age: "6",
          isForAdoption: false,
          imageUrl: "http://www.catwelfare.org/sites/default/files/imagecache/adpt_thumbnail_large/adoptions/kinder5.jpg",
          user_id: 1
        },
        cat4: {
          name: "Clov",
          color: "Calico",
          age: "13",
          isForAdoption: false,
          imageUrl: "http://www.catwelfare.org/sites/default/files/imagecache/adpt_thumbnail_large/adoptions/kinder5.jpg",
          user_id: 1
        }
      }
    }
  }
  componentWillMount(){
    //sync up state of cats with firebase here
  }

  componentDidMount(){
    base.onAuth()((user) => {
      if(user){
        this.authHandler(null, {user});
      }
    })
  }
  authenticate(provider){
    base.authWithOAuthPopup(provider, this.authHandler);
  }
  logout(){
    base.unauth();
    this.setState({uid: null});
  }
  authHandler(err, authData){
    console.log(authData)
    if (err){
      console.error(err);
      return;
    }
    //grab app info from firebase using root ref
    const appRef = base.database().ref();

    //query firebase once for app database
    appRef.once("value", (snapshot) => {
      let user = `${authData.user.uid}`
        appRef.set({
          users: {
            [user] : {
              uid: authData.user.uid,
              name: authData.user.displayName,
              imageUrl: authData.user.photoURL
            }
          }
        })
      this.setState({
        uid: authData.user.uid
      })
    })
  }

  addCat(cat){
    //make a copy of current state.cats
    const cats = {...this.state.cats};
    //add cat with unique key - may need to change since multiple users may add at the same time
    const timestamp = Date.now();
    cats[`cat-${timestamp}`] = cat
    //set state
    this.setState({cats})
  }

  render() {
    return (
      <div className="App">
        <Header
          uid={this.state.uid} authenticate={this.authenticate}
          logout={this.logout}
        />
        <ul className="list-of-cats">
          {
            Object.keys(this.state.cats)
                  .map(key => <Cat key={key} index={key} details={this.state.cats[key]} />)
          }
        </ul>
        <AddCatForm addCat={this.addCat} />
      </div>
    );
  }
}

export default App;
