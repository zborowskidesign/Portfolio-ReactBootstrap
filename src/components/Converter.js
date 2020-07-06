import React, {useEffect,useState} from 'react';
import ValueInput from './ValueInput';
import '../App.scss';

const url = `https://api.exchangeratesapi.io/latest?` 



const Converter = () => {


  const [Options,setOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setEchangeRate] = useState()
  const [amount,setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)



  let toAmount, fromAmount

  if(amountInFromCurrency)
  {
    fromAmount = amount
    toAmount = amount * exchangeRate
  }
  else{
    toAmount = amount
    fromAmount = amount / exchangeRate
  }
  useEffect(() =>
  {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const FirstOptionCurrency = Object.keys(data.rates)[0]
      setOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(FirstOptionCurrency)
      setEchangeRate(data.rates[FirstOptionCurrency])
    })
  }, [])

  useEffect(() => 
  {
    if(fromCurrency != null && toCurrency != null)
    {
      fetch(`${url}&base=${fromCurrency}&symbols=${toCurrency}`)
      .then(response => response.json())
      .then(data => setEchangeRate(data.rates[toCurrency]))
      
    }
  },[fromCurrency, toCurrency])

  function handleFromAmountChange(e)
  {
    if(e.target.value >= 0)
    {
      setAmount(e.target.value)
      setAmountInFromCurrency(true)
    }
    
  }

  function handleToAmountChange(e)
  {
    if(e.target.value >= 0)
    {
      setAmount(e.target.value)
      setAmountInFromCurrency(false)
    }
  }

    React.useEffect(() => 
    {
      const data = localStorage.getItem("value-story");
      if(data)
      {
        setAmount(JSON.parse(data));
        
      }
    }, [])

  


    React.useEffect(() => 
    {

      localStorage.setItem("value-story", JSON.stringify(fromAmount))
      localStorage.setItem("value-story-converted", JSON.stringify(toAmount))
      localStorage.setItem("value-storyDate", Date.now())
      localStorage.setItem("selectUp", JSON.stringify(fromCurrency))
      localStorage.setItem("selectDown", JSON.stringify(toCurrency))

    })

    

  return (
    
    <>
    <h1><strong>Przelicznik</strong> walut</h1>
    <ValueInput 
    Options = {Options}
    chooseCurrency= {fromCurrency}
    ChangeCurrency = {e => setFromCurrency(e.target.value)}
    onChangeAmount = {handleFromAmountChange}
    amount={fromAmount}
    />
    <ValueInput 
    Options = {Options}
    chooseCurrency= {toCurrency}
    ChangeCurrency = {e => setToCurrency(e.target.value)}
    onChangeAmount = {handleToAmountChange}
    amount={toAmount}
    />
    </>
    
  );
}


 
export default Converter;