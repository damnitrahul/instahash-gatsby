import React from 'react';
import './SkeletonLoader.scss';
import loaderBig from '../../icons/loaderBig.svg';
import loaderSmall from '../../icons/loaderSmall.svg';
function SkeletonLoaderBig() {
  return (
    <div className="SkeletonLoaderBig">
      <img src={loaderBig} alt="loading" />
    </div>
  );
}
function SkeletonLoaderSmall() {
  return (
    <div className="SkeletonLoaderSmall">
      <img src={loaderSmall} alt="laoding" />
    </div>
  );
}

export { SkeletonLoaderSmall, SkeletonLoaderBig };
