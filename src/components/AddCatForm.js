import React from 'react';

class AddCatForm extends React.Component {
  createCat(e){
    e.preventDefault();
    const cat = {
      name: this.name.value,
      age: this.age.value,
      color: this.color.value,
      isForAdoption: true,
      imageUrl: this.image.value,
      uid: this.props.uid
    }
    this.props.addCat(cat)
    this.catForm.reset();
  }

  render(){
    return (
        <form ref={(input) => this.catForm = input} className="cat-edit" onSubmit={(e) => this.createCat(e)}>
          <input ref={(input) => this.name = input} type="text" placeholder="Cat Name" />
          <input ref={(input) => this.age = input} type="text" placeholder="Cat Age" />
          <select ref={(input) => this.color = input}>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="calico">Calico</option>
              <option value="tabby">Tabby</option>
              <option value="ginger">Ginger</option>
              <option value="others">Others</option>
          </select>
          <input ref={(input) => this.image = input} type="text" placeholder="Cat Image" />
          <button type="submit">+ Add Item</button>
        </form>
    )
  }
}
//property type validation
AddCatForm.propTypes = {
  addCat: React.PropTypes.func.isRequired
}
export default AddCatForm;
