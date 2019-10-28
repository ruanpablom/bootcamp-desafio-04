import React from 'react';
import PropTypes from 'prop-types';

import './PostList.css';

function Comment({ comment }) {
  return (
    <>
      <div className="comment">
        <div className="author">
          <img className="img" src={comment.author.avatar} alt="" />
        </div>
        <div className="comment-box">
          <strong>{comment.author.name}</strong>
          {comment.content}
        </div>
      </div>
    </>
  );
}

/* Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.object()).isRequired,
}; */

export default Comment;
