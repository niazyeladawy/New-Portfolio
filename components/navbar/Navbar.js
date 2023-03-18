import React, { useContext, useEffect, useState } from 'react'
import logo from '../../public/logo.png'
import styles from '../../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import Image from 'next/image';
import { ResumeDataContext } from '@/context/ResumeContext';


const Navbar = () => {

    const { data } = useContext(ResumeDataContext)
    const [scrolled, setscrolled] = useState(false);


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
                    <Link className='logo' href='/'><Image src={logo} className={styles.logo} width={50} alt="logo" /></Link>
                    <div className={styles.links}>
                        <ul className={styles.links_ul}>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/about'>About</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                        </ul>
                        <ul className={styles.socials}>
                            <li><a target={'_blank'} href={data?.socials.Github.link}><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a target={'_blank'} href={data?.socials.Linkedin.link}><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar