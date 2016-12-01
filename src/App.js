import React, { Component } from 'react';
import Cat from "./components/Cat"
import AddCatForm from "./components/AddCatForm"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.addCat = this.addCat.bind(this);
    this.state = {
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
  addCat(cat){
    //make a copy of current state.cats
    const cats = {...this.state.cats};
    //add cat with unique key
    const timestamp = Date.now();
    cats[`cat-${timestamp}`] = cat
    //set state
    this.setState({cats})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://thecraftchop.com/files/images/grumpy.svg" className="App-logo" alt="logo" />
          <h2>Welcome to NekoNet</h2>
        </div>
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
