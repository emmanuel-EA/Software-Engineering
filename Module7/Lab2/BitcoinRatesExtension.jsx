import { useState } from "react";
import { useDataReducer } from "../hooks/useDataReducer";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {

    const [currency, setCurrency] = useState(currencies[0]);
    const btcResponse = useDataReducer(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
    const btcPrice = !btcResponse.loading && btcResponse.data ? btcResponse.data.bitcoin[currency.toLowerCase()] : 0;

    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>)

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            {btcResponse.loading ? <div>Please wait ...</div>
                : <div>1 BTC is worth {btcPrice} {currency}</div>}
            <div>{btcResponse.error}</div>
        </div>
    )

}

export default BitcoinRates;