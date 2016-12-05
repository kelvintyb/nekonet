import React from 'react';

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
      <form ref={(input) => this.catForm = input} className="cat-search" onSubmit={(e) => this.searchCat(e)}>
        <select ref={(input) => this.isForAdoption = input}>
            <option value="any">Any</option>
            <option value="true">Looking for Adoption</option>
        </select>
        <input ref={(input) => this.age = input} type="text" placeholder="Cat Age (Months)" />
        <select ref={(input) => this.color = input}>
            <option value="black">Any</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="calico">Calico</option>
            <option value="tabby">Tabby</option>
            <option value="ginger">Ginger</option>
            <option value="others">Others</option>
        </select>
        <button type="submit">+ Apply Filters</button>
      </form>
    );
  }

}

export default SearchCatForm;
