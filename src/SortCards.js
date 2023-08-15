import React from "react";

export default function SortCards(props) {
  function handleClick(event) {
    event.preventDefault();
    console.log(props.word);
  }
  return (
    <div className="SortCards">
      <button
        className="btn btn-danger sort-button"
        onClick={handleClick}
      ></button>
      <button className="btn btn-warning sort-button"></button>
      <button className="btn btn-primary sort-button"></button>
    </div>
  );
}
