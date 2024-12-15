// pages/about.js

import Education from '@/components/About/Education';
import Experinece from '@/components/About/Experinece';
import Head from 'next/head';
import styles from '../../styles/about.module.css';
import axios from 'axios';

const About = ({ data }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome to Niazy Eladawy Portfolio About me" />
        <title>About</title>
      </Head>

      {data ? (
        <main>
          <section>
            <div className="container">
              <div className={styles.main}>
                <div className={styles.head}>
                  <h2>About Me</h2>
                  <p>
                   {data?.about}
                  </p>
                </div>

                <Experinece eData={data?.experince} />
                <Education eData={data?.education} />
              </div>
            </div>
          </section>
        </main>
      ) : (
        <div className="loader-wrapper">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};

// Server-side rendering with getServerSideProps
export async function getServerSideProps() {
  try {
    // Fetch data from your API or server
    const {data} = await axios.get('https://resume-data-f7790-default-rtdb.europe-west1.firebasedatabase.app/data.json');

    // Pass the data as props to the component
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    // Handle errors by passing fallback data or returning a 404
    return {
      props: {
        data: null,
      },
    };
  }
}

export default About;
