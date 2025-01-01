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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Niazy Eladawy Portfolio",
    description: "Welcome to Niazy Eladawy's portfolio homepage showcasing recent work, projects, and skills.",
    url: "https://yourwebsite.com",
    author: {
      "@type": "Person",
      name: "Niazy Eladawy",
    },
  };

  return (
    <>
      <Head>
        <title>Niazy Eladawy Portfolio - Home</title>
        <meta
          name="description"
          content="Explore Niazy Eladawy's portfolio showcasing recent work, projects, and technical expertise in front-end development."
        />
        <meta name="keywords" content="Portfolio, Front-End Developer, JavaScript, React, Next.js, Niazy Eladawy" />
        <meta name="author" content="Niazy Eladawy" />
        <meta property="og:title" content="Niazy Eladawy Portfolio - Home" />
        <meta
          property="og:description"
          content="Welcome to Niazy Eladawy's portfolio homepage. Discover recent projects, technical skills, and work experience."
        />
        <meta property="og:url" content="https://new-portfolio-iota-hazel.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Niazy Eladawy Portfolio - Home" />
        <meta
          name="twitter:description"
          content="Discover Niazy Eladawy's front-end development projects, skills, and expertise."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main>
        {data ? (
          <>
            <HomeHeader years={data?.years} text={data?.hero} />
            <RecentWork recentWorkData={data?.recentWork} />
            <Projects projectsData={data?.projects} />
            <Tech />
          </>
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
      revalidate: 60,
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

export default Home;
