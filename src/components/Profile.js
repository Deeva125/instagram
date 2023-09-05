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
  async function getUsers() {
    let response = await fetch(
      "https://apex.oracle.com/pls/apex/deeva/post/getUsers"
    );
    let data = await response.json();
    console.log(data.items);
    setuser(data.items);
  }

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      <p>Profile</p>
      <img className="w-100" src={user[0].profile_photo} alt="" />
    </div>
  );
}

export default Profile;
