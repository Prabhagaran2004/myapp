import React from "react";
import "./Content.css";
import ItemsList from "./ItemsList";

const Content = ({ porulgal, maathu, edu }) => {
  return (
    <main>
      {porulgal.length ? (
        <ItemsList porulgal={porulgal} maathu={maathu} edu={edu} />
      ) : (
        <h2>Your list is empty..</h2>
      )}
    </main>
  );
};
   
export default Content;    
