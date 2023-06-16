import React from "react";


function Display(props) {
  return (
    <div className="display">
      <p>Current currency  is {props.currency}</p>
    </div>
  );
}

export default Display;