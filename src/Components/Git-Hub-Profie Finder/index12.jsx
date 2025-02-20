import { useState } from "react";
import "./styles12.css";
import fetchGitHubUsers from "./fetchData";
import GitHubUser from "./git-hub-user";

const GitHubProfileFinder = () => {
  const [user, setUser] = useState("");
  const [githubUsers, setGitHubUsers] = useState([]);
  const [searching, setSearching] = useState(false);
  const url = `https://api.github.com/search/users?q=${user.replace(
    /\s+/g,
    ""
  )}`;

  const handleUserInput = (e) => {
    setUser(e.target.value);
  };
  const handleUserSearch = () => {
    fetchGitHubUsers(url, setGitHubUsers, setSearching);
  };
  return (
    <section className="github-profile-container">
      <div className="input-wrapper">
        <label htmlFor="username-input">Username:</label>
        <input
          type="search"
          placeholder="Enter username"
          name="search-by-username"
          id="username-input"
          onChange={handleUserInput}
        />
        <button className="search-user" onClick={() => handleUserSearch()}>
          Search
        </button>
      </div>
      <div className="github-users-container">
        {searching ? (
          <h1>SEARCHING!!!</h1>
        ) : githubUsers.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>NO USERS FOUND!!</h1>
        ) : (
          <GitHubUser gitHubUsers={githubUsers} />
        )}
      </div>
    </section>
  );
};

export default GitHubProfileFinder;
