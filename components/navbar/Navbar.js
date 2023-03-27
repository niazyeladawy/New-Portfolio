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

    console.log('router',router)


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
                        <Image  src={logo} className={styles.logo} width={50} alt="Logo" priority="eager" />
                    </Link>
                    <nav className={styles.links}>
                        <ul className={styles.links_ul}>
                            <li>
                                <Link  className={router.pathname == "/" ? "activelink" : ""}  href='/' aria-label="Go to home page">Home</Link>
                            </li>
                            <li>
                                <Link className={router.pathname == "/about" ? "activelink" : ""} href='/about' aria-label="Go to about page">About</Link>
                            </li>
                            <li>
                                <Link className={router.pathname == "/contact" ? "activelink" : ""} href='/contact' aria-label="Go to contact page">Contact</Link>
                            </li>
                        </ul>
                        <ul className={styles.socials}>
                            <li>
                                <a target={'_blank'} href={data?.socials.Github.link} aria-label="Go to Github profile">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                            <li>
                                <a target={'_blank'} href={data?.socials.Linkedin.link} aria-label="Go to LinkedIn profile">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </nav>
    )
}

export default Navbar