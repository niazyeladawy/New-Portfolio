import React, { useContext, useEffect, useState } from 'react'
import logo from '../../public/logo.png'
import styles from '../../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import Image from 'next/image';
import { ResumeDataContext } from '@/context/ResumeContext';
import { useRouter } from 'next/router';


const Navbar = () => {

    const { data } = useContext(ResumeDataContext)
    const [scrolled, setscrolled] = useState(false);

    const router = useRouter()



    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            if (currentPosition > 0) {
                setscrolled(true);
            } else {
                setscrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.navbarscrolled : ''}`}>
            <div className='container'  >
                <div className={styles.navbar_wrapper}>
                    <Link className='logo' href='/'>
                        <Image src={logo} className={styles.logo} width={50} alt="Logo" priority="eager" />
                    </Link>
                    <nav className={styles.links}>
                        <ul className={styles.links_ul}>
                            <li>
                                <Link className={router.pathname == "/" ? "activelink" : ""} href='/' aria-label="Go to home page">Home</Link>
                            </li>
                            <li>
                                <Link className={router.pathname == "/about" ? "activelink" : ""} href='/about' aria-label="Go to about page">About</Link>
                            </li>
                            <li>
                                <Link className={router.pathname == "/contact" ? "activelink" : ""} href='/contact' aria-label="Go to contact page">Contact</Link>
                            </li>
                        </ul>
                        <ul className={styles.socials}>
                            <li><a target={'_blank'} aria-label="Go to Github profile" href='https://github.com/niazyeladawy'><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a target={'_blank'} aria-label="Go to LinkedIn profile" href='https://www.linkedin.com/in/niazy-eladawy/'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                            <li><a target={'_blank'} aria-label="Go to Upwrok profile" href='https://www.upwork.com/freelancers/niazye'><svg style={{ width: '20px', height: '20px', fill: "#666666" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 512"><path d="M494.7 295.6c-50.3 0-83.5-38.9-92.8-53.9c11.9-95.3 46.8-125.4 92.8-125.4c45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7zm0-237.8c-81.9 0-127.8 53.4-141 108.4c-14.9-28-25.9-65.5-34.5-100.3H206v141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141H.8v141c0 41.1 13.3 78.4 37.6 105.1c25 27.5 59.2 41.8 98.8 41.8c78.8 0 133.8-60.4 133.8-146.9V112.1c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4h66.4l23.1-141.3c7.6 6.3 15.7 12 24.2 17c22.2 14 47.7 21.9 73.9 22.8c0 0 4 .2 6.1 .2c81.2 0 145.9-62.9 145.9-147.8s-64.8-148.1-146-148.1z" /></svg></a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </nav>
    )
}

export default Navbar