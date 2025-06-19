import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);

  const data = useLoaderData();

  //   first way to fetch data through fetch api , another   way to fetch dat athrough useLoaderData joky react route rprovid ekrta ha it is an optiomize way to fetch data with  any load time

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/NirmaAbro")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log("res", res);
  //         setData(res);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  return (
    <div className="justify-center items-center m-auto flex gap-7  ">
      <h1 className="bg-gray-800 text-white p-4  ">
        Github Followers : {data.followers}
      </h1>
      <img
        src={data.avatar_url}
        alt="git pic"
        className="w-22 h-22 justify-center items-center flex rounded-4xl "
      />
    </div>
  );
}

export default Github;

export const GithubDataLoader = async () => {
  const response = await fetch("https://api.github.com/users/NirmaAbro");
  return response.json();
};
