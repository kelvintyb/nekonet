import React from 'react';
import Cat from "./Cat"
import "../css/CatDisplay.css"

const CatDisplay = (props) => {
  return (
    <div className="gallery">
      {
        Object.keys(props.cats)
        .map(key => <Cat key={key} index={key} details={props.cats[key]} updateCat={props.updateCat} />)
      }
    </div>
  )
}
export default CatDisplay;
