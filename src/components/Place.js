import React from "react";

const Place = ({ data, onVote }) => {
  return (
    <div>
      <button onClick={() => onVote(data)}>+</button>
      {data.name}
    </div>
  );
};

export default Place;
