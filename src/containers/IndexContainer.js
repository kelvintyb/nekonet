import React from 'react';
import {filterByStatus, filterByAge, filterByColor} from "../utils/helpers"
import {Modal, Button} from "react-bootstrap"
import AddCatForm from "../components/AddCatForm"
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
      },
      showModal: false
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.updateSearch = this.updateSearch.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  updateSearch(searchParams){
    this.setState({searchParams})
  }

  //add const cats that filters context.cats to give filtered data to cat display component
  render() {
    const addCatIcon = (<i className="icon ion-android-add-circle wow fadeIn" data-wow-delay=".3s" onClick={this.open}> Add Cat</i>)
    const {status, age, color} = this.state.searchParams;
    const cats = filterByStatus(status,filterByAge(age, filterByColor(color, this.context.cats)))
    return (
      <div className="main-container">
        <SearchForm updateSearch={this.updateSearch}/>
        {localStorage.getItem("localUser") && addCatIcon}
        <CatDisplay cats={cats} updateCat={this.context.updateCat} />
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create a Neko</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddCatForm onClose={this.close}/>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="info" onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

IndexContainer.contextTypes = {
  cats: React.PropTypes.object,
  updateCat: React.PropTypes.func
}

export default IndexContainer;
