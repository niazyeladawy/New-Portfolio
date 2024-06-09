import Image from 'next/image'
import React from 'react'
import profile from '../../public/profile.jpg'
import styles from '../../styles/HomeHeader.module.css'

const HomeHeader = ({years}) => {

    console.log("Sd" , years);

    return (
        <section className='home-header'>
            <div className='container'  >
                <div className={styles.main}>
                    <div>
                        <h1 className={styles.heading} > My name is
                            <span>Niazy Eladawy</span>
                            I am a Frontend Developer (React JS)  with {years}+ years experience </h1>
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