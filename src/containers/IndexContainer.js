import React from 'react';
import {filterByStatus, filterByAge, filterByColor} from "../utils/helpers"
import CatDisplay from "../components/CatDisplay"
import SearchForm from "../components/SearchCatForm"
import "../css/IndexContainer.css"

class IndexContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      searchParams: {
          status: "any",
          age: "any",
          color: "any"
      }
    }
    this.updateSearch = this.updateSearch.bind(this);
  }
  updateSearch(searchParams){
    this.setState({searchParams})
  }
  //add const cats that filters context.cats to give filtered data to cat display component
  render() {
    const {status, age, color} = this.state.searchParams;
    const cats = filterByStatus(status,filterByAge(age, filterByColor(color, this.context.cats)))
    return (
      <div className="main-container">
        <SearchForm updateSearch={this.updateSearch}/>
        <CatDisplay cats={cats} updateCat={this.context.updateCat} />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

IndexContainer.contextTypes = {
  cats: React.PropTypes.object,
  updateCat: React.PropTypes.func
}

export default IndexContainer;
