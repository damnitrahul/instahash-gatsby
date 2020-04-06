import React from 'react';
import './SearchResult.scss';
import icon from '../../icons/icons.svg';
function SearchResult(props) {
  const { username, fullname, dpsrc, verified } = props.data;
  const handleProfileLoad = () => {
    props.handleProfileLoad(username);
  };
  return (
    <div className="user-search-result" onClick={handleProfileLoad}>
      <div className="user-image">
        <img src={dpsrc} alt="" />
      </div>
      <div className="username">
        {username}{' '}
        {verified && (
          <span className="verify-icon">
            <svg>
              <use href={`${icon}#verify1`} />
            </svg>
          </span>
        )}
        <br /> <span>{fullname}</span>
      </div>
    </div>
  );
}

export default SearchResult;
