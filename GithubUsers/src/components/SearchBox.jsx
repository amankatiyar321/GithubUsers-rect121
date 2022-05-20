import React from "react";
import { useState } from "react";

export const SearchBox = ({ handelClick }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search here....."
        //  onChange={(e)=>handelClick(e.target.value)}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="gh" onClick={() => handelClick(text)}>Search</button>
    </div>
  );
};
