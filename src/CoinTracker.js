import { useEffect, useState } from "react";

function CoinTracker() {
  const [coins,setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [dollar, setDollar] = useState(0)
  const onChange = (e) => {
    setDollar(e.target.value)
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    })
  }, [])
  return (
    <div>
        {loading ? <strong>Loading.....</strong> : 
          <div>
            <h1>The Coins ({coins.length})</h1>
            <input 
              type="text"
              value={dollar}
              onChange={onChange}
            />
            <select>              
              {coins.map((coin) => (
                <option>
                  { coin.name } ({ coin.symbol }) : ${dollar}로 {Math.round(coin.quotes.USD.price/dollar)}개 만큼 살 수 있습니다!
                </option>
              )
              )}              
            </select>
          </div>
            
          
        }
        
    </div>
  );
}

export default CoinTracker;
