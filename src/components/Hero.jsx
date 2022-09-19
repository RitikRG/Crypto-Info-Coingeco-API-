import React from 'react'
import '../styles/generalstyle.css';
import Heroimg from '../assets/hero-img.png'
import { Link } from 'react-router-dom';

const herostyle ={
    container: `px-3 py-16 max-w-[1000px] mx-auto grid space-y-6 sm:grid-cols-2 sm:space-y-0 sm:space-x-3 `,
    textcontainer:`flex flex-col space-y-3 md:space-y-4 sm:py-6`,
    inputcontainer: `flex flex-col space-y-2 w-[80%] max-w-[300px] md:max-w-[1000px] md:w-full mx-auto md:flex-row md:space-x-3 md:items-center md:space-y-0`,
    input: `primary-input px-4 py-2 border-2 w-full md:w-[60%]`,
    btn: `primary-btn px-4 py-2  w-full md:w-[40%]`,
    imgcontainer:`flex justify-around max-w-[500px] mx-auto sm:col-start-2 sm:row-start-1 sm:py-6`,
}


const Hero = () => {
  return (
    <div className={herostyle.container}>
      <div className={herostyle.textcontainer}>
        <p className='text-[#808080] text-sm md:text-lg'>Buy & sell crypto 24/7 using your retirement account. </p>
        <p className='text-2xl font-semibold sm:text-3xl md:text-4xl'>Invest in Cryptocurrency with your <span>IRA</span></p>
        <p className='text-[#808080] text-sm md:text-lg'>Buy, Sell and Store hundreds of cryptocurrencies</p>
        <div className={herostyle.inputcontainer}>
            <input type="email" placeholder='Enter Your Email' className={herostyle.input}/>
            <button className={herostyle.btn}><Link to='/fullFeaturedPage'>Learn More</Link></button>
        </div>
      </div>
      <div className={herostyle.imgcontainer}>
        <img src={Heroimg} className='object-contain' alt="Defi Dashboard" />
      </div>
    </div>
  )
}

export default Hero
 