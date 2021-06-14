import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [repos, setRepos] = useState([{}]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.github.com/users/tahseenafzal/repos"
      );
      const data = await response.json();
      setRepos(data);
    }
    getData();
  }, []);
  return (
    <div>
      <h1>You are seeing all repositories.</h1>
      <ol>
        {repos.map((repoObj, ind) => {
          return <li key={ind}>{repoObj.name}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
