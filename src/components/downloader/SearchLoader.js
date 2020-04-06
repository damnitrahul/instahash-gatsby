import React from 'react';
import SearchResult from './SearchResult';
import './SearchLoader.scss';

function SearchLoader(props) {
  if (props.searchData.length === 0) return null;
  const results = props.searchData.map(data => (
    <SearchResult
      data={data}
      handleProfileLoad={props.handleProfileLoad}
      key={data.username}
    />
  ));
  return <div className="search-loader">{results} </div>;
}

export default SearchLoader;
