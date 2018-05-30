import React { Component } from 'react';
import '../App.css';
import { Fieldset } from 'react-bootstrap';

class CardFront extends React.Component {
  render() {
    return(
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div classname='col-xs-6'>
              <img src='https://source.unsplash.com/W8YICpz1I10/358x458' />
            </div>

            <div className='col-xs-6 side-front-content'>
              <h2> San Diego</h2>
              <h1>Full-Stack Developer</h1>
              <p>Damon is the man </p>
              <p>He is currently fullstack developer</p>
              <p>He has a background in business </p>
                </div>
              </div>
            </div>
          </div>          

    )
  }
}
