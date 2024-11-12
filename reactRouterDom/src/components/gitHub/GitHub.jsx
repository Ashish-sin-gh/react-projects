import React from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const userInfo = useLoaderData();

  return (
    <>
      <div className="p-3 bg-slate-500">
        <h1 className="p-3 text-yellow-100 text-2xl">GitHub: </h1>
        <h3 className=" p-3 text-yellow-100 text-xl">name: {userInfo.name}</h3>
        <img
          className="w-[200px] p-3"
          src={userInfo.avatar_url}
          alt="profile pic"
        />
      </div>
    </>
  );
}

async function gitHubfetchedData() {
  const response = await fetch("https://api.github.com/users/Ashish-sin-gh");
  const data = await response.json();
  return data;
}

export default GitHub;
export { gitHubfetchedData };
