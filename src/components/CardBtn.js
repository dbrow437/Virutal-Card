import React { Component } from 'react';
import '../App.css';


//React component for form button
class CardBtn extends React.Component {
  render() {
    return(
      <fieldset>
        <button className={this.props.className} type={this.props.type} value={this.props.value}>{this.props.value}</button>
      </fieldset>
    )
  }
}

export default CardBtn;
