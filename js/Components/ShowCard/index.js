require('./style.scss');
import React from 'react';
import { string } from 'prop-types';

const ShowCard = props => (
  <div className="show-card">
    test
    <img alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
    <div>
      <h1>testing</h1>
      <h3>test123</h3>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </div>
);

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
};

export default ShowCard;
