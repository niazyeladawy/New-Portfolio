import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';
import styles from '../../styles/Projects.module.css';

const Projects = ({ projectsData }) => {
    const [numToShow, setNumToShow] = useState(6);

    const handleLoadMoreClick = () => {
        setNumToShow(numToShow + 3);
    };

    const visibleProjectsData = projectsData?.slice(0, numToShow);

    return (
        <section className='projects'>
            <div className='container'>
                <h2 className='text-center'>Projects</h2>
                <p className='text-center'>Things I’ve built so far</p>
                <div className={styles.projects_cont}>
                    {visibleProjectsData?.map((i,idx) => {
                        return (
                            <div className={styles.project_item} key={idx}>
                                <div className={styles.img_cont}>
                                    <Image width={1920} height={1080} src={i.image} alt="" />
                                </div>
                                <div className={styles.text_cont}>
                                    <div>
                                        <h3>{i.title}</h3>
                                        <p className={styles.description}>{i.description}</p>
                                    </div>
                                    <div className={styles.item_foot}>
                                        <p className={styles.stack}>Tech stack: <span>{i.stack ? i.stack : ""}</span></p>
                                        <div className={styles.preview}>
                                            <span><FontAwesomeIcon icon={faLink} /><a target="_blank" href={i.links[1].link}>Live Preview</a></span>
                                            <span><FontAwesomeIcon icon={faGithub} /><a target="_blank" href={i.links[0].link}>View Code</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {numToShow < projectsData?.length &&
                    <div className="text-center">
                        <button className='load_more' onClick={handleLoadMoreClick}>Show More</button>
                    </div>
                }
            </div>
        </section>
    )
};

export default Projects;
