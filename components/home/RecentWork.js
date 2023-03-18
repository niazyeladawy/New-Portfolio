import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import styles from '../../styles/RecentWork.module.css'

const RecentWork = () => {
    return (
        <section className='recent-work'>
            <div className='container'  >
                <h2 className='text-center' >My Recent Work</h2>
                <p className='text-center' > Here are a few past design projects I&apos;ve worked on. Want to see more? <a href="mailto:niazyadawy2@gmail.com">Email me</a>.</p>

                <div className={styles.main_cont}>

                    <div className={styles.item}>
                        <div className={styles.item_wrapper}>
                            <Image className={styles.img}  width={1903} height={937}  src="https://i.imgur.com/rbOZLlC.png" alt="" />
                        </div>
                        <div className={styles.overlay}>
                            <h3>A website for renting games for events</h3>
                            <a target='_blank'  href="https://spelotheek.convident.builders" className='visit-website'  >visit website
                                <span><FontAwesomeIcon icon={faChevronRight} /></span>
                            </a>
                        </div>
                    </div>
                    <div  className={styles.item}>
                        <div className={styles.item_wrapper}>
                            <Image className={styles.img}  width={1920} height={1080}  src="https://i.imgur.com/DmZaRzw.png" alt="" />
                        </div>
                        <div className={styles.overlay}>
                            <h3>landing page for business parks</h3>
                            <a target='_blank'  href="https://nylandpark.convident.builders" className='visit-website'  >visit website
                                <span><FontAwesomeIcon icon={faChevronRight} /></span>
                            </a>
                        </div>
                    </div>
                    <div  className={styles.item}>
                        <div className={styles.item_wrapper}>
                            <Image className={styles.img}  width={1920} height={1080}  src="https://i.imgur.com/PZg8PBi.png" alt="" />
                        </div>
                        <div className={styles.overlay}>
                            <h3>A digital student tracking system to allow students to grow to the maximum </h3>
                            <a target='_blank'  href="https://diataal-nl.convident.builders" className='visit-website'  >visit website
                                <span><FontAwesomeIcon icon={faChevronRight} /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentWork