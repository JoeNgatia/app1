import React from "react";
import UserList from "../components/Login";
import { users } from "../data/users";

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>User Profiles</h1>
      <UserList users={users} />
    </div>
  );
};

export default Home;
