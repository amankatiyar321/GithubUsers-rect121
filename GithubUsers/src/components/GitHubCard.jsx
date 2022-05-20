import React from "react";
import "./css/GitHub.css";

export const GitHubCard = ({ avatar_url, login }) => {
  return (
    <div className="lk">
      <div>
      <div>
        <img src={avatar_url} width="150px" alt={login} />
      </div>
      <div>{login}</div>
      </div>
    </div>
  );
};
