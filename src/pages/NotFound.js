import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className = 'notfound'>
    <h1 >404 - Not Found!</h1>
    <Link to="/">
      <Button>Go Home</Button>
    </Link>
  </div>
);

export default NotFound;