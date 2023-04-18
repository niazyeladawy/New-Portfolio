import Image from 'next/image'
import React from 'react'
import profile from '../../public/profile.jpg'
import styles from '../../styles/HomeHeader.module.css'

const HomeHeader = () => {
    return (
        <section className='home-header'>
            <div className='container'  >
                <div className={styles.main}>
                    <div>
                        <h1 className={styles.heading} > My name is
                            <span>Niazy Eladawy</span>
                            I am a Front-end developer (React JS)  with 1.5+ years experience </h1>
                    </div>
                    <div className={styles.img_wrapper}>
                        <Image width={350} height={350} alt="profilepic" className={styles.profileimg} src={profile}/>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default HomeHeader