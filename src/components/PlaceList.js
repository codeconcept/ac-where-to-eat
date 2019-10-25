import React from "react";
import Place from "./Place";

const PlaceList = ({ places, onVote }) => {
  return (
    <div>
      {places.map(p => (
        <Place data={p} key={p.id} onVote={onVote} />
      ))}
    </div>
  );
};

export default PlaceList;
