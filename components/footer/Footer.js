import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import logo from '../../public/logo.png'
import { faGithub, faLinkedinIn, } from "@fortawesome/free-brands-svg-icons";
import { ResumeDataContext } from '@/context/ResumeContext'


const Footer = () => {
    const { data } = useContext(ResumeDataContext)

    console.log("ddddd",data);


    return (
        <footer>
            <div className='container'>
                <div className='footer-wrapper'>
                    <Link className='logo' href='/'><Image className='logo' src={logo} width={50} alt="logo" /></Link>
                    <div className='links'>
                        <ul>
                            <li>
                                <a href={`tel:+971504717182`}>+971504717182</a>
                            </li>
                            <li>
                                <a href={`mailto:niazyadawy2@gmail.com`}> niazyadawy2@gmail.com</a>
                            </li>
                        </ul>
                        <ul >
                            <li><a target={'_blank'} aria-label="Go to Github profile" href='https://github.com/niazyeladawy'><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a target={'_blank'} aria-label="Go to LinkedIn profile" href='https://www.linkedin.com/in/niazy-eladawy/'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                            <li><a target={'_blank'} aria-label="Go to Upwrok profile" href='https://www.upwork.com/freelancers/niazye'><svg style={{ width: '20px', height: '20px' ,fill:"#666666"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 512"><path d="M494.7 295.6c-50.3 0-83.5-38.9-92.8-53.9c11.9-95.3 46.8-125.4 92.8-125.4c45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7zm0-237.8c-81.9 0-127.8 53.4-141 108.4c-14.9-28-25.9-65.5-34.5-100.3H206v141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141H.8v141c0 41.1 13.3 78.4 37.6 105.1c25 27.5 59.2 41.8 98.8 41.8c78.8 0 133.8-60.4 133.8-146.9V112.1c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4h66.4l23.1-141.3c7.6 6.3 15.7 12 24.2 17c22.2 14 47.7 21.9 73.9 22.8c0 0 4 .2 6.1 .2c81.2 0 145.9-62.9 145.9-147.8s-64.8-148.1-146-148.1z"/></svg></a></li>
                            
                            
                           
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer