import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/generalstyle.css'
import {FiArrowDown, FiArrowUpLeft} from 'react-icons/fi'


const featuredstyle ={
    outcontainer:`featured-container bg-slate-200 py-36 sm:py-24`,
    container:`grid px-3 py-6 md:grid-cols-3 space-y-6 md:space-y-0 max-w-[1000px] mx-auto`,
    txtcontainer: `flex flex-col py-6 space-y-3 md:space-y-6 md:col-start-1 md:col-end-2`,
    btn: `primary-btn px-3 py-2 hover:scale-110 duration-300 w-full max-w-[280px] mx-auto `,
    coinscontainer:`grid grid-cols-2 sm:grid-cols-3  gap-6 p-3 md:col-start-2 md:col-span-2`,
    coinContainer:`flex flex-col space-y-2 items-center text-center rounded-md bg-slate-50 shadow-lg p-3  sm:hover:scale-110 duration-300`,
    coinImage:`object-contain w-[50px]`,
  }

const Featured = () => {
  const [data, setData] = useState((null));

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setData(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])
  if(!data){return null}



  const dataDisplay = [];

  data.forEach(coin=>{
    dataDisplay.push(
      <div key={coin.id} className={featuredstyle.coinContainer}>
        <img src={coin.image} className={featuredstyle.coinImage}/>
        <h2 className='text-lg font-bold'>{coin.name}</h2>
        <p className='text-md text-[#808080]'>${coin.current_price}</p>
        {coin.price_change_percentage_24h<0?(
          <span className='flex text-red-500 items-center'><FiArrowDown/>{coin.price_change_percentage_24h.toFixed(3)}%</span>
        ):(
          <span className='flex text-green-500 items-center'><FiArrowUpLeft/>{coin.price_change_percentage_24h.toFixed(3)}%</span>
        )}
      </div>
    )
  })


  return (
    <div className={featuredstyle.outcontainer}>
      <div className={featuredstyle.container}>
        <div className={featuredstyle.txtcontainer}>
          <p className='text-2xl font-bold'>Explore top Crypto's like Bitcoin, Ethereum and Dogecoin</p>
          <p className='text-[#808080]'>See all the available assets: Cryptos and NFTs</p>
          <button className={featuredstyle.btn}>See More Coins</button>
        </div>
        <div className={featuredstyle.coinscontainer}>
          {dataDisplay[0]}
          {dataDisplay[1]}
          {dataDisplay[2]}
          {dataDisplay[3]}
          {dataDisplay[4]}
          {dataDisplay[5]}
        </div>
      </div>
    </div>
  )
}

export default Featured
