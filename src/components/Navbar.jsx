import React, { useState } from 'react';
import { Link, link } from 'react-router-dom'

import '../styles/generalstyle.css';

import { AiOutlineMenuFold, AiOutlineCloseCircle } from 'react-icons/ai'

const navstyle = {
    outsidecontainer: `py-3 px-2 w-full shadow-md`,
    container: `flex justify-between items-center max-w-[1000px] mx-auto`,
    logocontainer: `text-2xl font-bold md:text-3xl`,
    mobilogocontainer: `text-2xl font-bold absolute top-6 left-2 animate-bounce`,
    mobinavcontainer: `w-full h-[200vh] top-0 right-[0px] fixed  bg-slate-100 z-10 ease-in-out duration-500 sm:hidden`,
    mobinavlinks: `p-4 text-black text-2xl font-semibold hover:text-main-green`,
    btn: `primary-btn hover:scale-110 duration-300 mt-[2rem] sm:mt-0 text-lg sm:text-[12px] md:text-lg px-2`,
    navlinkcontainer: ` flex justify-between items-center space-x-2 md:w-[400px] `,
    navlinks: `font-semibold tracking-[1px] hover:scale-110 duration-300 hover:text-main-green md:text-lg`
}





const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }


    return (
        <div className={navstyle.outsidecontainer}>
            <div className={navstyle.container}>
                <div className={navstyle.logocontainer}>
                    <p>De<span className='text-main-green'>Fi</span></p>
                </div>
                <div onClick={handleNav} className='sm:hidden duration-300'>
                    {!nav ? <AiOutlineCloseCircle size={30} /> : <AiOutlineMenuFold size={30} />}
                </div>
                <div className={!nav ? navstyle.mobinavcontainer : 'fixed right-[-400px]  sm:hidden'}>
                    <div onClick={handleNav} className='sm:hidden duration-300 absolute right-3 top-6'>
                        {!nav ? <AiOutlineCloseCircle size={30} /> : <AiOutlineMenuFold size={30} />}
                    </div>
                    <Link to='/'><div className={navstyle.mobilogocontainer}>
                        <p>De<span className='text-main-green'>Fi</span></p>
                    </div></Link>

                    <ul className='pt-[8rem] text-center px-14'>
                        <li className={navstyle.mobinavlinks}><Link to='/'>Home</Link></li>
                        <li className={navstyle.mobinavlinks}><Link to='/fullFeaturedPage'>Featured</Link></li>
                        <li className={navstyle.mobinavlinks}><Link to='/'>Earn</Link></li>
                        <li className={navstyle.mobinavlinks}><Link to='/contactPage'>Contact</Link></li>
                        <li><button className={navstyle.btn}>Connect Wallet</button></li>
                    </ul>

                </div>
                <div className='hidden sm:inline'>
                    <ul className={navstyle.navlinkcontainer}>
                        <li className={navstyle.navlinks}><Link to='/'>Home</Link></li>
                        <li className={navstyle.navlinks}><Link to='/fullFeaturedPage'>Featured</Link></li>
                        <li className={navstyle.navlinks}><Link to='/'>Earn</Link></li>
                        <li className={navstyle.navlinks}><Link to='/contactPage'>Contact</Link></li>
                    </ul>
                </div>
                <div className='hidden sm:inline'>
                <button className={navstyle.btn}>Connect Wallet</button>
                </div>


            </div>


        </div>

    )
}

export default Navbar
