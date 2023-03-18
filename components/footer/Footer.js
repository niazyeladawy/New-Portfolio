import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import logo from '../../public/logo.png'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { ResumeDataContext } from '@/context/ResumeContext'

const Footer = () => {
    const { data } = useContext(ResumeDataContext)


    return (
        <footer>
            <div className='container'>
                <div className='footer-wrapper'>
                    <Link className='logo' href='/'><Image className='logo' src={logo} width={50} alt="logo" /></Link>
                    <div className='links'>
                        <ul>
                            <li>
                                <a href={`tel:${data?.phone}`}>{data?.phone}</a>
                            </li>
                            <li>
                                <a href={`mailto:${data?.email}`}> {data?.email}</a>
                            </li>
                        </ul>
                        <ul >
                            <li><a target={'_blank'} href={data?.socials.Github.link}><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a target={'_blank'} href={data?.socials.Linkedin.link}><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer