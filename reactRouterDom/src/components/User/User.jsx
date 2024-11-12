import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="bg-gray-500 text-yellow-100 p-6 text-pretty text-center text-6xl">
      USER : {userId}
    </div>
  );
}

export default User;
