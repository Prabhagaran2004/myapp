import React from "react";
import List from "./List"

const ItemsList = ({porulgal, maathu, edu}) => {
  return (
    <ul>
      {porulgal.map((porul) => (
        <List 
          porul={porul}
          key={porul.id}
          maathu={maathu}
          edu={edu}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
