import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Avatar from "../assets/image/avatar.jpeg";
import Banner1 from "../assets/image/banner1.jpeg";
import Facts from "../components/facts";
import Layout from "../components/layout";
import Thinkings from "../components/thingkings";
import Timeline from "../components/timeline";
import Writing from "../components/writing";
import styles from "../styles/Home.module.css";
import Post from "./posts";
import Thinking from "./thinkings";

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Whats the next?</title>
        <meta name="description" content="Hireoo's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout >
        <div className="flex my-10 justify-center">
          <div className="mr-2">
            <h1 className="text-5xl">HIREOO</h1>
            <p>Seize the day ☀️ ｜Build my idea 💡</p>
          </div>
          <div>
            <Image src={Avatar} width={80} height={80} className="rounded-full" alt=""/>
          </div>
        </div>
        <div>
          <Image src={Banner1} alt="" />
          <Facts />
          <Thinkings />
          <Writing />
          <Timeline />
        </div>
        <footer className="mt-12 flex justify-center">
        © 2020 Copyright: ✨✨ Hireoo ✨✨
        </footer>
      </Layout>
    </div>
  );
};

export default Home;
