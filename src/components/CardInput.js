import React { Component } from 'react';
import '../App.css';
import { Fieldset } from 'react-bootstrap';

const cardContainer = document.querySelector('.react-card')

//React component for form inputs
class CardInput extends React.Component {
  render() {
    return(
      <fieldset>
      <input name={this.props.name} id={this.props.id} type={this.props.type || 'text'} placeholder={this.props.placeholder} required />
    )
  }
}


export default CardInput;
