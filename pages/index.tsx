import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>What's the next?</title>
        <meta name="description" content="Hireoo's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-3xl font-bold underline red">
          hello world
      </main>
    </div>
  )
}

export default Home
