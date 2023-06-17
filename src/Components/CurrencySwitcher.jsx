import React from "react";

function CurrencySwitcher(props) {
    return (
        <button className="btn" onClick={props.handleChangeCurrency}>
           Change it!
        </button>
      )
}

export default CurrencySwitcher;

