import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Joe Barnes",
      image:
        "https://images.unsplash.com/photo-1505635552518-3448ff116af3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80",
      places: 2
    }
  ];
  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
