import React from "react";
import Place from "./Place";

const PlaceList = props => {
  return (
    <div>
      {props.places.map(p => (
        <Place data={p} key={p.id} />
      ))}
    </div>
  );
};

export default PlaceList;
