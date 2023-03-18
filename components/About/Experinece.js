import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/about.module.css'


const Experinece = ({ eData }) => {
    return (
        <div className={styles.experinece}>
            <h2>Work Experience</h2>
            <div className={styles.items}>
                {
                    eData?.map((i, idx) => {
                        return (
                            <div className={styles.item} key={idx}>
                                <div className={styles.eHead}>
                                    <h3>{i.title}</h3>
                                    <span>{i.type}</span>
                                </div>
                                <div className={styles.desc}>
                                    <div>  <span> <FontAwesomeIcon icon={faBuilding} /> {i.company}</span>
                                        <span><FontAwesomeIcon icon={faLocationDot} />{i.location}</span></div>
                                    <span><FontAwesomeIcon icon={faCalendarDays} />{i.start_date} - {i.End_date} </span>
                                </div>

                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Experinece