import React from 'react';
import icon from '../../icons/icons.svg';
import './Profile.scss';
function Profile(props) {
  const {
    username,
    fullname,
    dpSrc,
    verified,
    followers,
    following,
    bio
  } = props.profile.userProfile;

  return (
    <div className="profile">
      <div className="profile-details">
        <div className="profile-name">
          {username}{' '}
          {verified && (
            <span className="verify-icon">
              <svg>
                <use href={`${icon}#verify1`} />
              </svg>
            </span>
          )}
          <br /> <span className="full-name">{fullname}</span>
        </div>
        <div className="profile-meta">
          <div>
            Followers <br /> {followers}
          </div>
          <div>
            Following <br /> {following}
          </div>
        </div>
        <div className="profile-bio">{bio}</div>
      </div>
      <div className="profile-img">
        <img src={dpSrc} alt="" />
        <div className="profile-download">
          <a href={dpSrc} download target="_blank" rel="noopener noreferrer">
            Download Image
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
