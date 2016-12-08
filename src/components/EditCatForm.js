import React from 'react';
import {Button} from "react-bootstrap"

class EditCatForm extends React.Component {
  editCat(e){
    e.preventDefault();
    const cat = {
      name: this.name.value,
      age: this.age.value,
      color: this.color.value,
      isForAdoption: this.isForAdoption.value,
      imageUrl: this.image.value,
    }
    this.props.updateCat(this.props.index, cat)
    this.catForm.reset();
  }

  render(){
    return (
        <form ref={(input) => this.catForm = input} className="cat-edit" onSubmit={(e) => this.editCat(e)}>
          <input ref={(input) => this.name = input} type="text" placeholder="Cat Name" />
          <input ref={(input) => this.age = input} type="text" placeholder="Cat Age (Months)" />
          <select ref={(input) => this.color = input}>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="calico">Calico</option>
              <option value="tabby">Tabby</option>
              <option value="ginger">Ginger</option>
              <option value="others">Others</option>
          </select>
          <select ref={(input) => this.isForAdoption = input}>
              <option value="true">Still looking for adoption</option>
              <option value="false">Has been adopted</option>
          </select>
          <input ref={(input) => this.image = input} type="text" placeholder="Cat Image" />
          <Button bsStyle="warning" type="submit">+ Update Cat Details</Button>
        </form>
    )
  }
}

export default EditCatForm;
