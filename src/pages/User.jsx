import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function User() {
  return (
    <>
      <Outlet />
      <h1 className="text-2xl text-center mb-5 text-red-600">
        <Link to="/users/1">User 1</Link>
      </h1>
      <h1 className="text-2xl text-center mb-5 text-red-600">
        <Link to="/users/2">User 2</Link>
      </h1>
      <h1 className="text-2xl text-center mb-5 text-red-600">
        <Link to="/users/3">User 3</Link>
      </h1>
    </>
  );
}

export default User;