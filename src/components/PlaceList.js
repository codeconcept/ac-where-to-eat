import React from "react";
import Place from "./Place";

const PlaceList = props => {
  const { places } = props;
  return (
    <div>
      {places.map(p => (
        <Place data={p} key={p.id} />
      ))}
    </div>
  );
};

export default PlaceList;
