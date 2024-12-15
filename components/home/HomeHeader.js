import Image from 'next/image'
import React from 'react'
import profile from '../../public/profile.jpg'
import styles from '../../styles/HomeHeader.module.css'

const HomeHeader = ({years,text}) => {


    return (
        <section className='home-header'>
            <div className='container'  >
                <div className={styles.main}>
                    <div>
                        <h1 className={styles.heading} > 
                           <b>Hi, I’m  <span> Niazy Eladawy</span></b>
                            {text} </h1>
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