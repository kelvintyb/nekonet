import React from 'react';
import CatDisplay from "../components/CatDisplay"
import SearchForm from "../components/SearchCatForm"

class IndexContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      searchDetails: {} //pulled from search form, and used to filter out cat pics
    }
  }
  //add const cats that filters context.cats to give filtered data to cat display component
  render() {
    return (
      <div>
        <SearchForm />
        <CatDisplay cats={this.context.cats} updateCat={this.context.updateCat} />
      </div>
    );
  }
}

IndexContainer.contextTypes = {
  cats: React.PropTypes.object,
  updateCat: React.PropTypes.func
}

export default IndexContainer;
