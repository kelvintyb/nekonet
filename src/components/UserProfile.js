import React from 'react';
import Cat from "./Cat";

class UserProfile extends React.Component {
  constructor(){
    super();
    this.state = {
      //
      user: {
        uid: 1,
        fosterList: {
          cat1: true,
          cat3: true,
          cat4: true
        }
      },
      //cats - note that age is going to be in terms of months
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
          name: "NotAdopted",
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

  render() {
    return (
      <div>
        <h2>This is the Profile View</h2>
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

export default UserProfile;
