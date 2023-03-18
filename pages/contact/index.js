import React from 'react'
import styles from '../../styles/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className='container'>
                <div className={styles.contact_wrapper}>
                    <h1>For any questions please mail us:
                    <a href={`mailto:niazyadawy2@gmail.com`}>niazyadawy2@gmail.com</a></h1>
                </div>
            </div>
        </section>
    )
}

export default Contact