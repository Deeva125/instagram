import React from "react";
import { useState } from "react";
import Post from "./Post";

function Search() {
  const [results, setresults] = useState([]);
  async function getPosts(key) {
    let response = await fetch(
      `https://apex.oracle.com/pls/apex/deeva/post/searchPosts?keyword=${key}`
    );
    let data = await response.json();
    console.log(data);
    setresults(data.items);
  }
  return (
    <div>
      <input
        className="w-100"
        type="text"
        placeholder="Search Posts"
        onChange={(e) => {
          getPosts(e.target.value);
        }}
      />
      <div className="container">
        <div className="row">
          {results.map((post) => {
            return <Post post={post} index={post.title} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
