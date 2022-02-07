import Head from 'next/head'
import React from 'react'
import { useEffect} from 'react'
import {useRouter} from 'next/router' 
import styles from '../styles/Home.module.css'

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/ethDashboard');
  },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Dashboard</title>
        <meta name="description" content="Created by Mando" />
      </Head>
    </div>
  )
  }
export default Home
