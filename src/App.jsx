import { React, useState } from "react";
import CurrencySwitcher from "./Components/CurrencySwitcher";
import Display from "./Components/Display";
import 'bootstrap/dist/css/bootstrap.min.css';



import "./App.css";

function App() {
    const [currency, setCurrency] = useState("EUR");

    const handleCurrencyChange = () => {
        let newCurrency;
        if (currency === "USD") {
            newCurrency = "EUR";
        } else if (currency === "EUR") {
            newCurrency = "JPY";
        } else if (currency === "JPY") {
            newCurrency = "GBP";
        } else if (currency === "GBP") {
            newCurrency = "CAD";
        } else {
            newCurrency = "USD";
        }
        setCurrency(newCurrency);
    };
    


    return (
        <div className="App">
            <Display currency={currency} />
            <CurrencySwitcher
                handleChangeCurrency={handleCurrencyChange}
                currency={currency}
            />
        </div>
    );
}

export default App;

