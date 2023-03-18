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
  }, [data, fetchData]);

  return (

    <>
      <Head>
        <title>Home</title>
      </Head>

      {data ? (
        <>
          <HomeHeader />
          <Skills />
          <RecentWork />
          <Projects projectsData={data?.projects} />
        </>
      ) : (
        <div className='loader-wrapper'>
          <span class="loader"></span>
        </div>
      )}

    </>
  )
}

export default Home
