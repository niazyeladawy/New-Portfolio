// pages/index.js

import Layout from '@/components/Layout';
import HomeHeader from '@/components/home/HomeHeader';
import RecentWork from '@/components/home/RecentWork';
import Skills from '@/components/home/Skills';
import Projects from '@/components/home/Projects';
import Head from 'next/head';
import axios from 'axios';
import Tech from '@/components/Tech';


const Home = ({ data }) => {
console.log("Ddd" , data);

  return (
    <>
      <Head>
        <meta name="description" content="Welcome to Niazy Eladawy Portfolio Homepage" />
        <title>Home</title>
      </Head>

      {data ? (
        <>
          <HomeHeader years={data?.years} text={data?.hero} />
          <RecentWork recentWorkData={data?.recentWork} />
          <Projects projectsData={data?.projects} />
          {/* <Skills /> */}
          <Tech/>
        </>
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

export default Home;
