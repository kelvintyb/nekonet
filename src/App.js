import React, { Component } from 'react';
import Cat from "./components/Cat"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cats: {
        cat1: {
          name: "Kinder",
          color: "Tabby",
          age: "1",
          status: "Up for Adoption",
          imageUrl: "http://www.catwelfare.org/sites/default/files/imagecache/adpt_thumbnail_large/adoptions/kinder5.jpg"
        },
        cat2: {
          name: "Kinder",
          color: "Tabby",
          age: "1",
          status: "Up for Adoption",
          imageUrl: "http://www.catwelfare.org/sites/default/files/imagecache/adpt_thumbnail_large/adoptions/kinder5.jpg"
        },
        cat3: {
          name: "Kinder",
          color: "Tabby",
          age: "1",
          status: "Not up for Adoption",
          imageUrl: "http://www.catwelfare.org/sites/default/files/imagecache/adpt_thumbnail_large/adoptions/kinder5.jpg"
        },
        cat4: {
          name: "Kinder",
          color: "Tabby",
          age: "1",
          status: "Up for Adoption",
          imageUrl: "http://www.catwelfare.org/sites/default/files/imagecache/adpt_thumbnail_large/adoptions/kinder5.jpg"
        }
      }
    }
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

      </div>
    );
  }
}

export default App;
