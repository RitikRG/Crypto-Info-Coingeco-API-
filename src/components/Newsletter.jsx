import React from 'react'
import trade from '../assets/trade.png'


const newsletterStyles={
    container:`max-w-[1000px] mx-auto py-6 px-3 grid sm:grid-cols-2`,
    txtContainer:` flex flex-col sm:justify-center space-y-3 sm:col-start-2 sm:py-16 sm:space-y-4`,
    txtHeading: `text-2xl font-bold md:text-3xl`,
    txt:`text-[#808080] font-semibold`,
    inputcontainer: `flex flex-col space-y-2 w-[80%] max-w-[300px] md:max-w-[1000px] md:w-full mx-auto md:flex-row md:space-x-3 md:items-center md:space-y-0`,
    input: `primary-input px-4 py-2 border-2 w-full md:w-[60%]`,
    btn: `primary-btn px-4 py-2  w-full md:w-[40%]`,
    imgContainer:`hidden sm:flex sm:col-start-1 sm:col-end-1 sm:row-start-1 `,
    img:`object-contain max-w-[300px] mx-auto`,

}




const Newsletter = () => {
  return (
    <div className={newsletterStyles.container}>
      <div className={newsletterStyles.txtContainer}>
        <h2 className={newsletterStyles.txtHeading}>Earn passive income with crypto</h2>
        <p className={newsletterStyles.txt}>Earn upto 12% annual reward on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockup and no limits  </p>
        <div className={newsletterStyles.inputcontainer}>
            <input type="email" placeholder='Enter Your Email' className={newsletterStyles.input}/>
            <button className={newsletterStyles.btn}>Learn More</button>
        </div>
      </div>
      <div className={newsletterStyles.imgContainer}>
        <img src={trade} alt="app interface" className={newsletterStyles.img} />
      </div>
    </div>
  )
}

export default Newsletter
