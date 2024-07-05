import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {InputBox} from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.jsx'


function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState('usd')
  const[to,setTo]=useState('inr')
  const[convertedAmount,setConvertedAmount]=useState(0)
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.Keys(currencyInfo)

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <div className="w-full  h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{backgroundImage :`url(https://images.pexels.com/photos/321457/pexels-photo-321457.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
    <form onSubmit={(e)=>{
      e.preventDefault()
      convert()
    }}>
      <div className="w-full mb-1">
        <InputBox
        label="from"
        amount={amount}
        currencyOption={options}
        onCurrencyChange={(currency)=>
          setFrom(currency)
        }
        onAmountChange={(amount)=>setAmount(amount)}
        selectedCurrency={from}
        />
      </div>
    </form>
    </div>
    </div>
  )
}

export default App
