import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="flex justify-center items-center m-auto bg-gray-800 text-white ">
      <h1>hi from user and id is : {id}</h1>
    </div>
  );
}

export default User;
