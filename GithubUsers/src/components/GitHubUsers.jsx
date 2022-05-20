import axios from "axios";
import "./css/GitHub.css";

export const GitHubUsers = (q = "vishesh", page = 1) => {
  return axios.get(`https://api.github.com/search/users`, {
    method: "GET",
    params: {
      q,
      per_page: 8,
      page,
    },
  });
};
