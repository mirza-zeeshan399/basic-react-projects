const GitHubUser = ({ gitHubUsers }) => {
  return gitHubUsers.map((item) => {
    const { login, id, html_url, repos_url, avatar_url } = item;
    return (
      <div className="github-user-wrapper" key={id}>
        <div className="github-user-avatar-wrapper">
          <img src={avatar_url} alt={login} className="github-user-avatar" />
        </div>
        <div className="github-user-profile-summary">
          <p className="github-user-name">{login}</p>
        </div>
        <footer className="github-user-links">
          <a href={html_url} target="_blank">
            <p className="github-user-link">Profile Link</p>
          </a>
          <a href={repos_url} target="_blank">
            <p className="github-user-repos-link">Repos Link</p>
          </a>
        </footer>
      </div>
    );
  });
};

export default GitHubUser;
