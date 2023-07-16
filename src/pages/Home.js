import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const { username } = useContext(AppContext);
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }
  return (
    <div>
      <h1>
        This is the Home Page : {username}
        <p>{data?.fact}</p>
      </h1>
      <button onClick={refetch}>Next</button>
    </div>
  );
};

export default Home;
