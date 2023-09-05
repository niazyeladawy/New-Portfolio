import React from 'react'
import htmlimg from '../../public/skills/html.svg'
import cssimg from '../../public/skills/css.svg'
import jsimg from '../../public/skills/js.svg'
import reactimg from '../../public/skills/react.svg'
import reduximg from '../../public/skills/redux.svg'
import bootstrapimg from '../../public/skills/bootstrap-logo-shadow.png'
import nextimg from '../../public/skills/next-js.svg'
import sassimg from '../../public/skills/logos_sass.svg'
import firebaseimg from '../../public/skills/firebase.png'
import muiimg from '../../public/skills/mui.png'
import tailwindimg from '../../public/skills/vscode-icons_file-type-tailwind.svg'
import jqueryimg from '../../public/skills/jquery-10-1175155.webp'
import socketimg from '../../public/skills/socket.svg'
import Image from 'next/image'
import styles from '../../styles/Skills.module.css'

const Skills = () => {
    return (
        <section className='skills'>
            <div className='container'>
                <h2 className='text-center'>My Tech Stack</h2>
                <p className='text-center'>Technologies I’ve been working with recently</p>

                <div className={styles.main_content}>
                    <div className={styles.img_cont}>
                        <Image width={120} src={htmlimg} alt="" />
                    </div>
                    <div className={styles.img_cont}>
                        <Image width={120} src={cssimg} alt="" />
                    </div>
                    <div className={styles.img_cont}>
                        <Image width={120} src={jsimg} alt="" />
                    </div>
                    <div className={styles.img_cont}>
                        <Image width={120} src={reactimg} alt="" />
                    </div>
                    <div className={styles.img_cont}>
                        <Image width={120} src={reduximg} alt="" />
                    </div>
                    <div className={styles.img_cont}>
                        <Image width={120} src={bootstrapimg} alt="" />
                    </div>
                    <div className={styles.img_cont}>
                        <Image width={120} src={nextimg} alt="" />
                    </div>
                    <div className={styles.img_cont}>
                        <Image width={120} src={sassimg} alt="" />
                    </div>
                    <div className={styles.img_cont}>
                        <Image width={120} src={firebaseimg} alt="" />
                    </div>
                    <div className={styles.img_cont}>
                        <Image width={120} src={muiimg} alt="" />
                    </div>
                    <div className={styles.img_cont}>
                        <Image width={120} src={tailwindimg} alt="" />
                    </div>
                    <div className={styles.img_cont}>
                        <Image width={120} src={socketimg} alt="" />
                    </div>
                    <div className={styles.img_cont}>
                        <Image width={120} src={jqueryimg} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills