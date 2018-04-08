require('./style.scss');
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>Landing page</h1>
    <Link to="/search">or Browse All</Link>
  </div>
);

export default Landing;
