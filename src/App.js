import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [repos, setRepos] =useState([{}]);
  useEffect(()=>{
    async const getData = () =>{
      const response = await fetch('https://api.github.com/users/muhammadmohsin/repos')
      const data = await response.json();
      setRepos(data)
    }
    getData();
  })
  return (<div>
    {repos.map((repoObj)=>{
      <li key={ind}>{repoObj.name}</li>
    })}
  </div>);
}

export default App;
