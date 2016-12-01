import React from 'react';

class Cat extends React.Component {

  render() {
    const {details} = this.props;
    return(
      <li className="menu-cat">
        <img src={details.imageUrl} alt={details.name} />
        <h3 className="cat-name">
          {details.name}
          <span className="status">{details.status}</span>
        </h3>
        <p>{details.age} years old</p>
      </li>
      )
  }

}

export default Cat;
