import React from "react";

function CurrencySwitcher(props) {
    return (
        <button className="btn" onClick={props.handleChangeCurrency}>
          Current currency is {props.currency}. Change it!
        </button>
      )
}

export default CurrencySwitcher;

