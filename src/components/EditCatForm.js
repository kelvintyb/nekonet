import React from 'react';
import {Button} from "react-bootstrap"
import "../css/EditCat.css";


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
    this.props.onClose();
  }

  render(){
    return (
        <form ref={(input) => this.catForm = input} className="cat-edit control-label col-m-5" onSubmit={(e) => this.editCat(e)}>
          Cat Name:
          <input ref={(input) => this.name = input} type="text" className="form-control" placeholder={this.props.cat.name} />
          Age(in months):
          <input ref={(input) => this.age = input} type="text" className="form-control" placeholder={this.props.cat.age}/>
          Primary Colour:
          <select ref={(input) => this.color = input} className="form-control">
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="calico">Calico</option>
            <option value="tabby">Tabby</option>
            <option value="ginger">Ginger</option>
            <option value="others">Others</option>
          </select>
          Adoption Status:
          <select ref={(input) => this.isForAdoption = input} className="form-control">
            <option value="true">Still looking for adoption</option>
            <option value="false">Has been adopted</option>
          </select>
          Upload Picture here:
          <input ref={(input) => this.image = input} type="text" className="form-control" placeholder={this.props.cat.imageUrl}/>
          <Button bsStyle="warning" type="submit" className="form-control">+ Update Cat Details</Button>
        </form>
    )
  }
}

export default EditCatForm;
