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
                <meta name="description" content="Welcome to Niazy Eladawy Portfolio About me" />
                <title>About</title>

            </Head>
            {data ? (<main>
                <section>
                    <div className='container'>
                        <div className={styles.main}>
                            <div className={styles.head}>
                                <h2>About Me</h2>
                                <p>I am a Front-end developer (React JS) with a UX/UI design background with {data?.year}+ years experience and flair for
                                    creating elegant solutions, Experience with all stages of the development cycle for
                                    dynamic Web projects. Proficient in HTML, CSS, JavaScript, ReactJS, modern
                                    libraries, and frameworks.
                                </p>
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