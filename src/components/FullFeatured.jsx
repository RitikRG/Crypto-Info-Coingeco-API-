import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FiArrowDown, FiArrowUpLeft } from 'react-icons/fi'


const fullFeaturedStyle = {
    container: `max-w-[1000px] mx-auto px-3 py-6`,
    heading: `grid grid-cols-`,
    mobiContainer: `grid grid-cols-2 gap-3 md:hidden`,
    mobiCoinContainer: `bg-slate-200 rounded-lg shadow-lg p-3 flex flex-col items-center`,
    mobiCoinImg: `object-contain w-[75px]`,
    pcContainer:`hidden md:block`,
    pcContainerHeading: `grid grid-cols-4 bg-slate-400 rounded-lg shadow-lg font-bold px-3 py-4 text-xl gap-x-3 `,
    pcCoinContainer:`grid grid-cols-4 mt-3 shadow-md rounded-md hover:scale-110 duration-300 py-2`,
    pcCoinImg:`max-w-[100px] mx-auto`,
}




const FullFeatured = () => {

    const [data, setData] = useState((null));
    

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    if (!data) { return null };

    const dataDisplayMobi = [];
    

    data.forEach(coin => {
        dataDisplayMobi.push(
            <div key={coin.id} className={fullFeaturedStyle.mobiCoinContainer} >
                <img src={coin.image} className={fullFeaturedStyle.mobiCoinImg} />
                <h2 className='text-lg font-bold'>{coin.name}</h2>
                <p className='text-md text-[#808080]'>${coin.current_price}</p>
                {coin.price_change_percentage_24h < 0 ? (
                    <span className='flex text-red-500 items-center'><FiArrowDown />{coin.price_change_percentage_24h.toFixed(3)}%</span>
                ) : (
                    <span className='flex text-green-500 items-center'><FiArrowUpLeft />{coin.price_change_percentage_24h.toFixed(3)}%</span>
                )}
            </div>
        )
    })


    const dataDisplayPc = [];

    data.forEach(coin => {
        dataDisplayPc.push(
            <div key={coin.id} className={fullFeaturedStyle.pcCoinContainer} >
                <img src={coin.image} className={fullFeaturedStyle.pcCoinImg} />
                <h2 className='text-2xl font-bold flex items-center'>{coin.name}</h2>
                <p className='text-xl text-[#808080] font-semibold flex items-center'>${coin.current_price}</p>
                {coin.price_change_percentage_24h < 0 ? (
                    <span className='flex text-red-500 items-center text-xl font-semibold'><FiArrowDown />{coin.price_change_percentage_24h.toFixed(3)}%</span>
                ) : (
                    <span className='flex text-green-500 items-center text-xl font-semibold'><FiArrowUpLeft />{coin.price_change_percentage_24h.toFixed(3)}%</span>
                )}
            </div>
        )
    })





    return (
        <div className={fullFeaturedStyle.container}>
            <div className={fullFeaturedStyle.mobiContainer}>
                {dataDisplayMobi}
            </div>
            <div className={fullFeaturedStyle.pcContainer}>
                <div className={fullFeaturedStyle.pcContainerHeading}>
                    <div className='col-span-2 text-center'>Currency</div>
                    <div>Current Price</div>
                    <div>% Change</div>
                </div>
                <div>
                    {dataDisplayPc}
                </div>
            </div>
        </div>
    )
}

export default FullFeatured
