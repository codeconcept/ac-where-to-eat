import React from "react";

const PlaceList = props => {
  console.log(props);
  return (
    <div>
      {props.places.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

export default PlaceList;
