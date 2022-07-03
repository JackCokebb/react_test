import { useEffect, useState } from "react";

function Coin_converter() {
  
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [result, setResult] = useState(0);
  const [selected, setSelected] = useState(0);
  const onChange = (event) =>{
    setMoney(event.target.value);
  }
  const onClick = (event) =>{
    setResult(parseFloat(money) / parseFloat(selected));
    console.log(parseFloat(money));
    console.log(parseFloat(selected))
    console.log(parseFloat(money) / parseFloat(selected));
  }
  const onSelect = (event) =>{
    setSelected(event.target.value);
    console.log(event);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((respone)=> respone.json())
      .then((json)=>{
        setCoins([{id: '00', quotes:{USD:{price: 0}}, name:"select...",symbol:"",},...json]);
        setLoading(false);
      });
  },[]);
  
  
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : (
        <div>
          <h3>From (USD)</h3>
          <input type="number" onChange={onChange} value={money} />
          <button onClick={onClick}>change to coin!</button>
          <hr/>
          <h3>To</h3>
          <select onChange={onSelect}>
            {coins.map((coin)=>(
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>))}
          </select>
          <h4>{result} coins</h4>
      </div>

      )}
      
    </div>
  );
}


