import React from 'react';
import PropTypes from 'prop-types';

export default function Filters({ sortFunc, filterFunc }) {
  return (
    <div>
      <select onChange={(e) => sortFunc(e)}>
        <option value="name">Name</option>
        <option value="max_atmosphering_speed">Light Speed</option>
        <option value="length">length</option>
        <option value="cost_in_credits">Galactic Credits</option>
      </select>
      <input type="text" placeholder="Filter" onChange={filterFunc} />
    </div>
  );
}

Filters.propTypes = {
  sortFunc: PropTypes.func,
  filterFunc: PropTypes.func,
};
