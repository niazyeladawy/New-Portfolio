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
import typescript from '../../public/skills/typescript.svg'
import vueimg from '../../public/skills/Vue1.svg';
import nuxtimg from '../../public/skills/nuxt.webp';
import nodejsimg from '../../public/skills/nodejs.svg';
import expressimg from '../../public/skills/express.png';

import Image from 'next/image'
import styles from '../../styles/Skills.module.css'

const Skills = () => {

    const skills = [
        // Front-end core
        { src: htmlimg, alt: 'HTML' },
        { src: cssimg, alt: 'CSS' },
        { src: jsimg, alt: 'JavaScript' },
        { src: typescript, alt: 'TypeScript' },

        // Frameworks & libraries - front-end
        { src: reactimg, alt: 'React' },
        { src: nextimg, alt: 'Next.js' },
        { src: vueimg, alt: 'Vue.js' },
        { src: nuxtimg, alt: 'Nuxt.js' },
        { src: reduximg, alt: 'Redux' },
        { src: jqueryimg, alt: 'jQuery' },

        // Styling
        { src: bootstrapimg, alt: 'Bootstrap' },
        { src: sassimg, alt: 'Sass' },
        { src: tailwindimg, alt: 'Tailwind CSS' },
        { src: muiimg, alt: 'Material UI' },

        // Back-end
        { src: nodejsimg, alt: 'Node.js' },
        { src: expressimg, alt: 'Express.js' },
        { src: firebaseimg, alt: 'Firebase' },
        { src: socketimg, alt: 'Socket.io' },
    ];
    return (
        <section className='skills'>
            <div className='container'>
                <h2 className='text-center'>My Tech Stack</h2>
                <p className='text-center'>Technologies I’ve been working with recently</p>

                <div className={styles.main_content}>
                    {skills.map(({ src, alt }) => (
                        <div key={alt} className={styles.img_cont}>
                            <Image width={120} src={src} alt={alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills