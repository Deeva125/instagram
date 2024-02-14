import React, { useState } from "react";

function Post({ post, index }) {
  const [like, setLike] = useState(0);
  const [loading, setLoading] = useState(false);
  const likePost = async () => {
    setLoading(true);
    let respone = await fetch(
      `https://apex.oracle.com/pls/apex/deevasworkspace/instagram/posts?title=${post.title}`,
      { method: "PUT" }
    );
    if (respone.status == 200) {
      setLike(like + 1);
    }
    setLoading(false);
  };

  return (
    <div key={index} className="col-12">
      <div className="card">
        <div className="card-body">
          <h6> {post.username} </h6>
          <h5 className="card-title">{post.title}</h5>
          <img src={post.imgurl} className="card-img-top" alt="" />
          {loading ? (
            <button className="btn btn-outline-secondary border-0">
              <div
                className="spinner-border spinner-border-sm me-1"
                role="status"
              ></div>
              <span>{post.likes + like}</span>
            </button>
          ) : (
            <button
              onClick={likePost}
              className="btn btn-outline-dark border-0"
            >
              <i className="bi bi-heart"></i> <span>{post.likes + like}</span>
            </button>
          )}
          <p className="card-text">{post.post_description}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
