import React, { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";

function Feed() {
  const [posts, setposts] = useState([]);
  const [stories, setstories] = useState([]);

  async function getStories() {
    let response = await fetch(
      "https://apex.oracle.com/pls/apex/deeva/post/stories"
    );
    let data = await response.json();
    setstories(data.items);
    console.log(data.items);
  }

  async function getPost() {
    let response = await fetch(
      "https://apex.oracle.com/pls/apex/deeva/post/get"
    );
    let data = await response.json();
    setposts(data.items);
  }

  const sortPostByLikes = async () => {
    let response = await fetch(
      "https://apex.oracle.com/pls/apex/deeva/post/get"
    );
    let data = await response.json();
    let sortedPost = [...data.items];
    sortedPost.sort((first, second) => second.likes - first.likes);
    console.log(sortedPost);
    setposts(sortedPost);
  };

  useEffect(() => {
    getPost();
    getStories();
  }, []);

  return (
    <div className="row">
      <div className="col">
        <div className="row stories ">
          {stories.map((story) => {
            return (
              <div key={story.username} className="col-3 text-center">
                <img
                  className="rounded-circle border border-warning border-3 w-50"
                  src={story.imageurl}
                />

                <p>{story.username}</p>
              </div>
            );
          })}
        </div>

        <div className="row">
          <div className="col">
            <button
              className="btn btn-outline-dark border-radius-3"
              onClick={sortPostByLikes}
            >
              <i className="bi bi-chevron-up me-1"></i>
              Top Post
            </button>
          </div>
        </div>

        <div className="row post">
          {posts.map((post, index) => {
            return <Post post={post} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Feed;
