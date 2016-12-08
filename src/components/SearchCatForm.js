import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap"

class SearchCatForm extends React.Component {
  searchCat(e){
    e.preventDefault();
    const searchParams = {
        status: this.isForAdoption.value,
        age: this.age.value,
        color: this.color.value
    }
    this.props.updateSearch(searchParams);
  }
  render() {
    return (
      <Form inline onSubmit={(e)=>this.searchCat(e)}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Adoption Status:</ControlLabel>
          {"  "}
          <FormControl componentClass="select" inputRef={(input) => this.isForAdoption = input}>
            <option value="any">Any</option>
            <option value="true">Looking for Adoption</option>
          </FormControl>
        </FormGroup>
        {"    "}
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Cat Age:</ControlLabel>
            {"  "}
          <FormControl componentClass="select" inputRef={(input) => this.age = input}>
            <option value="any">Any</option>
            <option value="6">6 mths old or younger</option>
            <option value="12">Between 6-12 mths old</option>
            <option value="24">Between 1-2 yrs old</option>
            <option value="36">Between 2-3 yrs old</option>
            <option value="48">Between 3-4 yrs old</option>
            <option value="60">Between 4-5 yrs old</option>
            <option value="72">5 yrs old or older</option>
          </FormControl>
        </FormGroup>
        {"    "}
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Primary Colour:</ControlLabel>
            {"  "}
          <FormControl componentClass="select" inputRef={(input) => this.color = input}>
            <option value="any">Any</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="calico">Calico</option>
            <option value="tabby">Tabby</option>
            <option value="ginger">Ginger</option>
            <option value="others">Others</option>
          </FormControl>
        </FormGroup>
        <Button bsStyle="warning" type="submit">Apply Filters</Button>
      </Form>
    );
  }
}

// <form ref={(input) => this.catForm = input} className="cat-search" onSubmit={(e) => this.searchCat(e)}>
//   <select ref={(input) => this.isForAdoption = input}>
//       <option value="any">Any</option>
//       <option value="true">Looking for Adoption</option>
//   </select>
//   <input ref={(input) => this.age = input} type="text" placeholder="Cat Age (Months)" />
//   <select ref={(input) => this.color = input}>
//       <option value="any">Any</option>
      // <option value="black">Black</option>
      // <option value="white">White</option>
      // <option value="calico">Calico</option>
      // <option value="tabby">Tabby</option>
      // <option value="ginger">Ginger</option>
      // <option value="others">Others</option>
//   </select>
//   <button type="submit">+ Apply Filters</button>
// </form>
export default SearchCatForm;
