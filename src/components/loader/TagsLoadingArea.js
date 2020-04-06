import React from 'react';
import { SkeletonLoaderSmall } from './SkeletonLoader';

function TagsLoadingArea() {
  const loads = Array.from({ length: 30 }).map((load, i) => (
    <SkeletonLoaderSmall key={i} />
  ));
  return <div className="TagsLoadingArea">{loads}</div>;
}

export default TagsLoadingArea;
