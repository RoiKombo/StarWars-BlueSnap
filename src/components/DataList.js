import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/ListStyle.css';
import Item from './Item';
import Filters from './Filters';

export default function DataList({ results }) {
  const [data, setData] = useState(results);
  const [sortKey, setSortKey] = useState('');
  const sortResults = (list, key) => {
    const newSoreredList = [...list];
    return newSoreredList.sort((a, b) => (a[key] < b[key] ? 1 : -1));
  };

  useEffect(() => {
    setData(sortResults(results, sortKey));
  }, [results, sortKey]);

  const onSelectSort = (e) => {
    setSortKey(e.target.value);
  };

  const filterFunc = (e) => {
    setData(
      results.filter((item) =>
        JSON.stringify(Object.values(item)).includes(e.target.value)
      )
    );
  };

  useEffect(() => {
    setData(results);
  }, [results]);

  return (
    <div className="DataList">
      <Filters sortFunc={onSelectSort} filterFunc={filterFunc} />
      <div className="listHeader">
        <div>Name</div>
        <div>Light Speed</div>
        <div>Size</div>
        <div>Galactic Credits</div>
      </div>

      {data.map((shipDetail, i) => (
        <Item
          name={shipDetail.name}
          cost={shipDetail.cost_in_credits}
          length={shipDetail.length}
          speed={shipDetail.max_atmosphering_speed}
          key={i}
        />
      ))}
      <div />
    </div>
  );
}

DataList.propTypes = {
  results: PropTypes.array,
};
