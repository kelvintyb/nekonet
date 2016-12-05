import React from 'react';
import {filterByStatus, filterByAge, filterByColor} from "../utils/helpers"
import CatDisplay from "../components/CatDisplay"
import SearchForm from "../components/SearchCatForm"

class IndexContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      searchParams: {
          status: "any",
          age: "any",
          color: "any"
      } //pull from search form, and use to filter out cat pics
    }
  }
  //add const cats that filters context.cats to give filtered data to cat display component
  render() {
    const {status, age, color} = this.state.searchParams;
    const cats = filterByStatus(status,filterByAge(age, filterByColor(color, this.context.cats)))
    return (
      <div>
        <SearchForm />
        <CatDisplay cats={cats} updateCat={this.context.updateCat} />
      </div>
    );
  }
}

IndexContainer.contextTypes = {
  cats: React.PropTypes.object,
  updateCat: React.PropTypes.func
}

export default IndexContainer;
