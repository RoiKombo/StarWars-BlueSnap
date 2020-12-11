import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ItemStyle.css';

export default function Item(props) {
  const { name, length, cost, speed } = props;
  return (
    <div className="singleRow">
      <div>{name}</div>
      <div>{length}</div>
      <div>{cost}</div>
      <div>{speed}</div>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.any,
  length: PropTypes.any,
  cost: PropTypes.any,
  speed: PropTypes.any,
};
