import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link';
import {BsFacebook, BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'


const footerStyle = {
    outerContainer: `bg-slate-200 w-full`,
    container:`max-w-[1000px] mx-auto px-3 p-6 grid grid-cols-2 sm:grid-cols-4 gap-y-6`,
    linksContainer:`space-y-3`,
    linksHeading:`font-bold`,
    linksDivider:`w-[40px] h-[8px] bg-main-green rounded-lg`,
    links:`cursor-pointer`,
    socialLinks:`cursor-pointer flex  items-center`,
}


const Footer = () => {
  return (
    <div className={footerStyle.outerContainer}>
      <div className={footerStyle.container}>
        <div className={footerStyle.linksContainer}>
            <h3 className={footerStyle.linksHeading}>Support</h3>
            <div className={footerStyle.linksDivider}></div>
            <ul>
                <Link to='/contactPage'> <li className={footerStyle.links}>Contact Us</li></Link>
                <li className={footerStyle.links}>Chat</li>
                <li className={footerStyle.links}>Help Center</li>
                <Link to='/faqPage'><li className={footerStyle.links}>FAQ</li></Link>
            </ul>
        </div>
        <div className={footerStyle.linksContainer}>
            <h3 className={footerStyle.linksHeading}>Developers</h3>
            <div className={footerStyle.linksDivider}></div>
            <ul>
                <li className={footerStyle.links}>Cloud</li>
                <li className={footerStyle.links}>Commerce</li>
                <li className={footerStyle.links}>Pro</li>
                <li className={footerStyle.links}>Api</li>
            </ul>
        </div>
        <div className={footerStyle.linksContainer}>
            <h3 className={footerStyle.linksHeading}>Company</h3>
            <div className={footerStyle.linksDivider}></div>
            <ul>
                <li className={footerStyle.links}>About</li>
                <li className={footerStyle.links}>Information</li>
                <li className={footerStyle.links}>Legal</li>
                <li className={footerStyle.links}>Privacy</li>
            </ul>
        </div>
        <div className={footerStyle.linksContainer}>
            <h3 className={footerStyle.linksHeading}>Social</h3>
            <div className={footerStyle.linksDivider}></div>
            <ul>
                <ExternalLink href="https://www.facebook.com/profile.php?id=100017563477524" ><li className={footerStyle.socialLinks}><BsFacebook className='mr-2'/>  FaceBook</li></ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/rgritik/" ><li className={footerStyle.socialLinks}><BsLinkedin className='mr-2'/>LinkedIn</li></ExternalLink>
                <ExternalLink href="https://github.com/RitikRG" ><li className={footerStyle.socialLinks}><BsGithub className='mr-2'/>Github</li></ExternalLink>
                <ExternalLink href="https://twitter.com/GuptaRitik19" ><li className={footerStyle.socialLinks}><BsTwitter className='mr-2'/>Twitter</li></ExternalLink>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
