// pages/about.js

import Education from '@/components/About/Education';
import Experinece from '@/components/About/Experinece';
import Head from 'next/head';
import styles from '../../styles/about.module.css';
import axios from 'axios';

const About = ({ data }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Niazy Eladawy",
    description: "Learn more about Niazy Eladawy, a skilled Front-End Developer with expertise in JavaScript, React, Next.js, and more.",
    url: "https://yourwebsite.com/about",
    author: {
      "@type": "Person",
      name: "Niazy Eladawy",
    },
  };

  return (
    <>
      <Head>
        <title>About Niazy Eladawy - Front-End Developer</title>
        <meta
          name="description"
          content="Discover Niazy Eladawy's professional journey, including education, experience, and technical expertise as a Front-End Developer."
        />
        <meta name="keywords" content="About, Front-End Developer, JavaScript, React, Next.js, Niazy Eladawy" />
        <meta name="author" content="Niazy Eladawy" />
        <meta property="og:title" content="About Niazy Eladawy - Front-End Developer" />
        <meta
          property="og:description"
          content="Learn more about Niazy Eladawy, a skilled Front-End Developer with extensive experience and technical expertise."
        />
        <meta property="og:url" content="https://new-portfolio-iota-hazel.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Niazy Eladawy - Front-End Developer" />
        <meta
          name="twitter:description"
          content="Discover Niazy Eladawy's education, professional experience, and technical skills as a Front-End Developer."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main>
        {data ? (
          <section>
            <div className="container">
              <div className={styles.main}>
                <div className={styles.head}>
                  <h1>About Me</h1>
                  <p>{data?.about}</p>
                </div>

                <Experinece eData={data?.experince} />
                <Education eData={data?.education} />
              </div>
            </div>
          </section>
        ) : (
          <div className="loader-wrapper">
            <span className="loader"></span>
          </div>
        )}
      </main>
    </>
  );
};

// Static Site Generation with getStaticProps
export async function getStaticProps() {
  try {
    const { data } = await axios.get('https://resume-data-f7790-default-rtdb.europe-west1.firebasedatabase.app/data.json');

    return {
      props: {
        data,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default About;
