import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './TagsBundle.scss';
function TagsBundle(props) {
  const [title, setTitle] = useState('Copy');

  const handleTitle = () => {
    setTitle('Copied');
  };
  const handleResetTitle = () => {
    setTitle('Copy');
  };
  const hashtags = props.hash
    .slice(0, 30)
    .map(tag => '#' + tag.tag + ' ')
    .toString()
    .replace(/,/g, ' ');

  return (
    <CopyToClipboard
      text={hashtags}
      onCopy={handleTitle}
      onMouseLeave={handleResetTitle}
    >
      <div className="tag-bundle" data-title={title}>
        <p className="hash-bundle">{hashtags}</p>
        <p className="hash-title">
          <span>Top 30 Hashtags</span>
          <span className="copy-text">{title}</span>{' '}
        </p>
      </div>
    </CopyToClipboard>
  );
}

export default TagsBundle;
