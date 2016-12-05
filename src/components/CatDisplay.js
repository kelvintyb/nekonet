import React from 'react';
import Cat from "./Cat"

const CatDisplay = (props) => {
  return (
    <ul className="list-of-cats">
      {
        Object.keys(props.cats)
        .map(key => <Cat key={key} index={key} details={props.cats[key]} updateCat={props.updateCat} />)
      }
    </ul>
  )
}

export default CatDisplay;
