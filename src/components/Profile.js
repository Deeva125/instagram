import React, { useEffect } from "react";
import { useState } from "react";

function Profile() {
  const [user, setuser] = useState([
    {
      username: "deeva123",
      user_password: "password",
      profile_photo:
        "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTE4Njh8MHwxfHNlYXJjaHwyM3x8dXNlciUyMGljb258ZW58MHx8fHwxNjkzOTU3NjU1fDA&ixlib=rb-4.0.3&q=80&w=1080",
      displayname: "Deeva S",
    },
  ]);

  const [imgurl, setimgurl] = useState("");
  async function userInfo() {
    let response = await fetch(
      "https://apex.oracle.com/pls/apex/deeva/post/getUsers"
    );
    let data = await response.json();
    for (let i = 0; i < data.items.length; i++) {
      if (data.items[i].username === localStorage.getItem("username")) {
        setuser(data.items[i]);
        break;
      }
    }
    console.log(data.items);
  }
  async function changeProfilePic() {
    let response = await fetch(
      `https://apex.oracle.com/pls/apex/deeva/post/changeProfilePic?userrname=deeva&imgurl=${imgurl}`,
      { method: "POST" }
    );
  }

  function handleImageUrlChange(e) {
    setimgurl(e.target.value);
  }

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <div>
      <p>Profile</p>
      <p>{user.displayname}</p>
      <p>{user.username}</p>
      <img className="w-100" src={user.profile_photo} alt="" />
      <input
        placeholder="Image Link"
        className="w-100"
        type="text"
        onChange={handleImageUrlChange}
        value={imgurl}
      />
      <button onClick={changeProfilePic}>Change Profile Picture</button>
    </div>
  );
}

export default Profile;
