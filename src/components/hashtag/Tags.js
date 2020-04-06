import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Tags.scss';
import { useState } from 'react';
function Tags(props) {
  const [title, setTitle] = useState('Click to copy');

  const handleTitle = () => {
    setTitle('Copied');
  };
  const handleResetTitle = () => {
    setTitle('Click to copy');
  };

  return (
    <CopyToClipboard
      text={`#${props.tag.tag}`}
      onCopy={handleTitle}
      onMouseLeave={handleResetTitle}
    >
      <div className="tag" data-title={title}>
        <p className="hash">#{props.tag.tag}</p>
        <p className="count">{props.tag.posts}</p>
      </div>
    </CopyToClipboard>
  );
}

export default Tags;
