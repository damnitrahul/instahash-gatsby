import React, { useState, useEffect } from 'react';
import './Downloader.scss';
import { fetchUsers, fetchProfile } from '../../fetchFunctions/Functions';
import icon from '../../icons/icons.svg';
import SearchLoader from './SearchLoader';
import Profile from './Profile';

function Downloader() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState({ loading: true, data: [], error: false });
  const [profile, setProfile] = useState({ loading: false, userProfile: '' });

  useEffect(() => {
    if (search.length !== 0) fetchUsers(search, setUser);
  }, [search]);
  useEffect(() => {
    fetchProfile('instagram', setProfile);
  }, []);

  // const handleFetch = e => {
  //   e.preventDefault();
  //   fetchUsers(search, setUser);
  // };
  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  const handleProfileLoad = username => {
    setUser(st => ({ ...st, data: [] }));
    fetchProfile(username, setProfile);
  };

  const handleProfileSubmit = e => {
    e.preventDefault();
    setUser(st => ({ ...st, data: [] }));
    fetchProfile(search, setProfile);
  };

  return (
    <section>
      <div className="container">
        <div
          className={`downloader-form ${user.data.length !== 0 && 'active'}`}
        >
          <form onSubmit={handleProfileSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="search"
                value={search}
                autoComplete="off"
                onChange={handleInputChange}
                placeholder="Search Username..."
                className="hash-search"
                required
                minLength={2}
              />
              <button type="submit">
                <svg>
                  <use href={`${icon}#search`} />
                </svg>
              </button>
            </div>
          </form>
          <SearchLoader
            searchData={user.data}
            handleProfileLoad={handleProfileLoad}
          />
        </div>

        {user.error && (
          <p style={{ textAlign: 'center' }}>
            No Users Found, Please Try Again!
          </p>
        )}
        {profile.userProfile !== '' && <Profile profile={profile} />}
      </div>
    </section>
  );
}

export default Downloader;
