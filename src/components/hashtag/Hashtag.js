import React, { useState, useEffect } from 'react';
import './Hashtag.scss';
import { fetchReq } from '../../fetchFunctions/Functions';
import Tags from './Tags';
import TagsBundle from './TagsBundle';
import icon from '../../icons/icons.svg';
import { SkeletonLoaderBig } from '../loader/SkeletonLoader';
import TagsLoadingArea from '../loader/TagsLoadingArea';

function Hashtag() {
  const [search, setSearch] = useState('');
  const [hash, setHash] = useState({ loading: false, data: [] });
  const { loading, data } = hash;

  useEffect(() => {
    fetchReq('trending', setHash);
  }, []);

  const handleFetch = e => {
    e.preventDefault();
    fetchReq(search, setHash);
  };
  const handleInputChange = e => {
    setSearch(e.target.value);
  };
  return (
    <section>
      <div className="container">
        <div className="search-form">
          <form onSubmit={handleFetch}>
            <div className="form-group">
              <input
                type="text"
                name="search"
                value={search}
                onChange={handleInputChange}
                placeholder="Search Hashtag..."
                className="hash-search"
                required
                minLength={2}
                maxLength={20}
              />
              <button type="submit">
                <svg>
                  <use href={`${icon}#search`} />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      {!loading && (
        <>
          <div className="search-result container">
            {data.length !== 0 && <TagsBundle hash={data} />}
          </div>
          <div
            className="search-result container"
            style={{ textAlign: 'center' }}
          >
            {data.map(tag => (
              <Tags key={tag.tag} tag={tag} />
            ))}
          </div>
        </>
      )}
      {loading && (
        <div className="search-result container">
          <SkeletonLoaderBig />
          <TagsLoadingArea />
        </div>
      )}
    </section>
  );
}

export default Hashtag;
