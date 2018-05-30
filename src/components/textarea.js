import React { Component } from 'react';
import '../App.css';
import { Fieldset } from 'react-bootstrap';

//React component for textarea
class CardTextArea extends React.Component {
  render () {
    return (
      <fieldset>
        <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required > </textarea>
      </fieldset>
    )
  }
}


export default CardTextArea;
