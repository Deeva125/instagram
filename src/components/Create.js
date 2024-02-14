import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState } from "react";

function Create() {
  const [title, settitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [imgurl, setImgurl] = useState("");

  async function uploadPost(e) {
    e.preventDefault();
    if (imgurl.slice(0, 8) !== "https://") {
      alert("invalid url pease put valid image linke");
      if (imgurl.length > 2000) {
        alert("Image Link is Too Long");
      }
      alert("Please start link with https");
      return;
    }
    let username = localStorage.getItem("username");
    let response = await fetch(
      `https://apex.oracle.com/pls/apex/deevasworkspace/instagram/posts?username=${username}&title=${title}&imgurl=${imgurl}&post_description=${postDescription}&likes=0`,
      { method: "POST" }
    );
    console.log("uploaded new data to the database by deeva singhal");
    settitle("");
    setPostDescription("");
    setImgurl("");
  }

  return (
    <div className="create text-center">
      <form onSubmit={uploadPost}>
        <div className="mb-3">
          <label htmlFor="inputTitle" className="form-label">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => settitle(e.target.value)}
            type="text"
            className="form-control"
            id="inputTitle"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
          <input
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
            type="text"
            className="form-control"
            id="inputDescription"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputImage" className="form-label">
            Image Link
          </label>
          <input
            value={imgurl}
            onChange={(e) => setImgurl(e.target.value)}
            type="text"
            className="form-control"
            id="inputLink"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Upload
        </button>
      </form>
    </div>
  );
}

export default Create;
