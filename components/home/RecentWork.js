import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import styles from '../../styles/RecentWork.module.css'

const RecentWork = ({ recentWorkData }) => {
        const reversedWorkData = [...recentWorkData].reverse();

    
    return (
        <section className='recent-work'>
            <div className='container'  >
                <h2 className='text-center' >My Recent Work</h2>
                <p className='text-center' > Here are a few past design projects I&apos;ve worked on. Want to see more? <a href="mailto:niazyadawy2@gmail.com">Email me</a>.</p>

                <div className={styles.main_cont}>

                    {
                        reversedWorkData?.map((item) => {
                            return (
                                <div className={styles.item} key={item.id}>
                                    <div className={styles.item_wrapper}>
                                        <Image className={styles.img} width={1903} height={937} src={item.img} alt="" />
                                    </div>
                                    <div className={styles.overlay}>
                                        <h3>{item.title}</h3>
                                        <a target='_blank' href={item.link} className='visit-website'  >visit website
                                            <span><FontAwesomeIcon icon={faChevronRight} /></span>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default RecentWork
