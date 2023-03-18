import Education from '@/components/About/Education';
import Experinece from '@/components/About/Experinece';
import { ResumeDataContext } from '@/context/ResumeContext';
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import styles from '../../styles/about.module.css'

const About = () => {

    const { fetchData, data, loading } = useContext(ResumeDataContext)


    useEffect(() => {
        if (!data) {
            fetchData();
        }
    }, []);



    return (

        <>
            <Head>
                <title>About</title>
            </Head>
            {data ? (<main>
                <section>
                    <div className='container'>
                        <div className={styles.main}>
                            <div className={styles.head}>
                                <h2>About Me</h2>
                                <p>The Generator App is an online tool that helps you to export ready-made templates reGady to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
                            </div>

                            <Experinece eData={data?.experince} />
                            <Education eData={data?.education} />
                        </div>

                    </div>
                </section>
            </main>) : (
                <div className='loader-wrapper'>
                    <span class="loader"></span>
                </div>
            )}

        </>
    )
}

export default About