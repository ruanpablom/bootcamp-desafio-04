import React from 'react';
import PropTypes from 'prop-types';

import './PostList.css';

function Post({ post }) {
  return (
    <>
      <div className="author">
        <img className="img" src={post.author.avatar} alt="" />
        <div className="info">
          <strong>{post.author.name}</strong>
          <small>{post.date}</small>
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Post;
