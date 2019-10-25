import React from "react";

const Place = ({ data, onVote }) => {
  const { votes } = data;
  const voteOrVotes = votes <= 1 ? " vote" : " votes";
  return (
    <div>
      <button onClick={() => onVote(data)}>+</button>
      {data.name} {votes} {voteOrVotes}
    </div>
  );
};

export default Place;
