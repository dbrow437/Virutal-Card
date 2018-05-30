import React { Component } from 'react';
import '../App.css';
import { Fieldset } from 'react-bootstrap';

//React component for social profile links
class CardProfileLinks extends React.Component {
  render() {
    const profileLinks = ['twitter', 'linkedin', 'facebook'];

    constlinksList = profileLinks.map((link, index) =>
      <li key={index}><a href='#'><i className={'fa fa-' + link}></i></a></li>
    )

    return(
      <div className'card-social-links'>
        <ul className='social-links'>
        {linksList}
        </ul>
        </div>
    )
  }
}

export default CardProifleLinks;
