import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SearchBox } from "./SearchBox";
import { GitHubCard } from "./GitHubCard";
import { GitHubUsers } from "./GitHubUsers";
import "./css/GitHub.css";

export const GitHub = () => {
  const [loading, setLoading] = useState(false);
  const [errs, seterrs] = useState(false);
  const [query, setQuery] = useState("masai");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  console.log(data);
  useEffect(() => {
    setLoading(true);
    GitHubUsers(query, page)
      .then((res) => {
        setLoading(false);
        seterrs(false);
        setData(res.data);
      })
      .catch((err) => {
        seterrs(true);
        seterrs(true);
        setLoading(false);
        console.log(err);
      });
    // console.log(2)
    //   https://api.github.com/search/users?q=${Enter%20Text}&page=${page%20Number}&per_page=${How%20many%20page%20in%20one%20time}
  }, [query, page]);

  console.log(query);

  const handelClick = (query) => setQuery(query);
  // const handlePageChange = (page) => setPage(page);

  return (
    <div>
      <h2>Git Users</h2>
      {loading && <div>...Loading</div>}
      {errs && <div>...Errors</div>}
      <SearchBox handelClick={handelClick} />
      <div className="pk">
        {data?.items?.map((item) => (
          <GitHubCard key={item.id} {...item} />
        ))}
      </div>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button disabled={page === 1} onClick={() => setPage(1)}>
          1
        </button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
        <button onClick={() => setPage(5)}>5</button>
        <button onClick={() => setPage(6)}>6</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};
