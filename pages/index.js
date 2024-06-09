// pages/index.js

import Layout from '@/components/Layout'
import HomeHeader from '@/components/home/HomeHeader'
import RecentWork from '@/components/home/RecentWork'
import Skills from '@/components/home/Skills'
import Projects from '@/components/home/Projects'
import { useContext, useEffect, useState } from 'react'
import { ResumeDataContext } from '@/context/ResumeContext'
import Head from 'next/head'

const Home = () => {
  const { fetchData, data, loading } = useContext(ResumeDataContext)

  useEffect(() => {
    fetchData();
  }, []);



  return (

    <>
      <Head>
        <meta name="description" content="Welcome to Niazy Eladawy Portfolio Homepage" />
        <title>Home</title>
      </Head>

      {data ? (
        <>
          <HomeHeader years={data?.years} />
          
          <RecentWork recentWorkData={data?.recentWork} />
          <Projects projectsData={data?.projects} />
          <Skills />
        </>
      ) : (
        <div className='loader-wrapper'>
          <span className="loader"></span>
        </div>
      )}

    </>
  )
}

export default Home
