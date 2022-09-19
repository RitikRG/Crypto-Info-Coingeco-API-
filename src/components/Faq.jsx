import React from 'react'




const faqStyle = {
    container: `max-w-[1000px] mx-auto rounded-lg py-10 px-3 grid md:grid-cols-3`,
    headcontainer: ` px-3 py-6`,
    heading: `text-2xl font-bold`,
    quecontainer: `flex flex-col space-y-6 py-6 px-3 md:col-start-2 md:col-span-2 md:pl-16`,
    que: `font-semibold`,
    ans: `text-[#808080]`
}


const Faq = () => {
  return (
    <div className='bg-slate-50'>
      <div className={faqStyle.container}>
        <div className={faqStyle.headcontainer}>
            <p className={faqStyle.heading}>Frequently <span className='text-main-green'> Asked</span> Questions</p>
            <p className='text-[#808080]'>Can't find the answers you are looking for, please contact our <a className='text-main-green mr-1'> customer suport</a>team.</p>
        </div>
        <div className={faqStyle.quecontainer}>
            <div className='space-y-3'>
                <p className={faqStyle.que}>How do you get Ganga Jal?</p>
                <p className={faqStyle.ans}>Just go to your nearest Gangaji Point and take the holy water. Make sure to maintain cleanliness</p>
            </div>
            <div className='space-y-3'>
                <p className={faqStyle.que}>What's the best thing about Switzerland?</p>
                <p className={faqStyle.ans}>It's just the nature man! And also the people, they are very friendly but on the downside it's the most expensive tourist destination</p>
            </div>
            <div className='space-y-3'>
                <p className={faqStyle.que}>How much web dev have you learnt till now?</p>
                <p className={faqStyle.ans}>HTML, CSS, JS, Tailwind, Bootstrap, ReactJs. Infact this particular project is being built using TailwindCss and ReactJS</p>
            </div>
            <div className='space-y-3'>
                <p className={faqStyle.que}>How much discount can I get?</p>
                <p className={faqStyle.ans}>It's a fix rate shop, so no Discount. Just kidding! you can get a custom plan that suits your needs and budget.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
