import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();

  return (
    <>
      <h2 className="text-3xl text-center mt-6">Details About User {userId}</h2>
    </>
  );
}

export default UserDetails;
