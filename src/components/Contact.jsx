import React from 'react'
import {FaPaperPlane, FaPhoneAlt} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'



const contactStyle = {
    container: `max-w-[1000px] mx-auto py-10 px-3 grid md:grid-cols-3`,
    git: `py-8 space-y-6 px-3 grid`,
    githeading: `text-2xl font-bold`,
    gittext: `text-md text-[#808080] `,
    gitjobtext: `text-md text-[#808080]  pt-14`,
    gitform: `py-8  md:col-start-2 md:col-span-2`,
    inputDiv: `flex flex-col-reverse max-w-[400px] mx-auto`,
    input: ` form-control rounded-md py-2 px-4 shadow-md  peer  font-semibold outline-none`,
    label: `font-semibold absolute -translate-y-10 transition-all peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:-z-10`,
    textarealabel: `font-semibold absolute -translate-y-[134px] transition-all peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:-z-10`,
    btn: `px-3 py-2 bg-main-green primary-btn rounded-md text-slate-50 hover:shadow-md hover:shadow-main-green/50 flex space-x-2 items-center hover:scale-110 duration-300`,
}

const Contact = () => {
    return (
        <div className='bg-slate-50'>
            <div className={contactStyle.container}>
                {/* git - get in touch */}
                <div className={contactStyle.git}>
                    <p className={contactStyle.githeading}>Get in <span className='text-main-green'> Touch</span></p>
                    <p className={contactStyle.gittext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, necessitatibus.</p>
                    <p className={contactStyle.gittext}>752, Evergreen Street</p>
                    <p className={contactStyle.gittext}> SW, Calgary</p>
                    <a className={contactStyle.gittext} href="tel:+8755949959"> <FaPhoneAlt className='inline'/> <span className='ml-2'>8755349959</span></a>
                    <a href="mailto: ritik.mpmwebsolutions@gmail.com" className={contactStyle.gittext}><AiOutlineMail className='inline'/> <span className='ml-0'>ritik.mpmwebsolutions@gmail.co</span></a>
                    <p className={contactStyle.gitjobtext}>Looking for job opportunity? Check out <a className='text-main-green ml'> Careers</a> </p>
                </div>
                <div className={contactStyle.gitform}>
                    <form className='py-4 space-y-10' >
                        <div className={contactStyle.inputDiv}>
                            <input type="text" id="name" name="name" className={contactStyle.input} placeholder="Full Name" />
                            <label for="name" className={contactStyle.label} name="name">Full Name</label>
                        </div>
                        <div className={contactStyle.inputDiv}>
                            <input type="email" id="email" name="email" className={contactStyle.input} placeholder=" Email" />
                            <label for="email" className={contactStyle.label} name="email">Email</label>
                        </div>
                        <div className={contactStyle.inputDiv}>
                            <input type="number" id="phnumber" name="phnumber" className={contactStyle.input} placeholder="Phone No." />
                            <label for="phnumber" className={contactStyle.label} name="phnumber">Phone No.</label>
                        </div>
                        <div className={contactStyle.inputDiv}>
                            <textarea rows={5} className={contactStyle.input} placeholder="Your message" id='msg'/>
                            <label for="msg" className={contactStyle.textarealabel} name="msg">Your Message</label>
                        </div>
                        <div className='flex justify-between  max-w-[400px] mx-auto space-x-3'>
                            <input type="checkbox"/><p className={contactStyle.gittext}>By clicking the send message button you agree to our <span className='text-main-green mx'>Data privacy</span> policy</p>
                        </div>
                        <div className='flex justify-around'>
                            <button className={contactStyle.btn}><FaPaperPlane/> <span className='ml-2'> Send Message</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
