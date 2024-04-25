import React from 'react';
import PropTypes from 'prop-types';

function Card({ children }) {
  return (
    <div className='card'>{children}</div>
  )
}
// card
Card.propTypes = {
  children: PropTypes.node
};

export default Card;
