import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../../styles/about.module.css'
import { faLocationDot, faCalendarDays , faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

const Education = ({ eData }) => {
    return (
        <div className={styles.experinece}>
            <h2 style={{marginTop:"70px"}}>Education</h2>
            <div className={styles.items}>
                {
                    eData?.map((i, idx) => {
                        return (
                            <div className={styles.item} key={idx}>
                                <div className={styles.eHead}>
                                    <h3 >{i.title}</h3>
                                </div>
                                <div className={styles.desc}>
                                    <div>  <span> <FontAwesomeIcon icon={faBuildingColumns} /> {i.university}</span>
                                        <span><FontAwesomeIcon icon={faLocationDot} />{i.location}</span></div>
                                    <span><FontAwesomeIcon icon={faCalendarDays} />{i.start_date} - {i.end_date} </span>
                                </div>

                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Education