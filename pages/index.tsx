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
import axios from "axios";
import { IFacts } from "../interface/facts";

export async function getServerSideProps() {
  try {
    const facts = await axios.get("https://api-blog.hireoo.fun/facts/");
    const posts = await axios.get("https://api-blog.hireoo.fun/posts/");
    const thinkings = await axios.get("https://api-blog.hireoo.fun/thinkings/");
    const timelines = await axios.get("https://api-blog.hireoo.fun/timelines/");
    const factsData: IFacts[] = facts.data;
    const thinkingsData = thinkings.data;
    const postsData = posts.data;
    const timelinesData = timelines.data;

    return { props: { factsData, postsData, thinkingsData, timelinesData } };
  } catch (err) {
    return console.log(err);
  }
}

const Home: any = ({ factsData, postsData, thinkingsData, timelinesData }) => {
  return (
    <div className="dark:text-[#DCA54C]">
      <Head>
        <title>Whats the next?</title>
        <meta name="description" content="Hireoo's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex my-10 justify-center">
          <div className="mr-2">
            <h1 className="text-5xl ">HIREOO</h1>
            <p className="dark:text-[#DCA54C]">
              Seize the day ☀️ ｜Build my idea 💡
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={Avatar}
              width={80}
              height={80}
              className="rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Image src={Banner1} alt="" />
          <Facts factsData={factsData} />
          <Thinkings thinkingsData={thinkingsData} />
          <Writing postsData={postsData} />
          <Timeline timelinesData={timelinesData} />
        </div>
        <footer className="mt-12 flex justify-center">
          © 2022 Copyright: ✨✨ Hireoo ✨✨
          <br></br>
        沪ICP备2021027123号-1
        </footer>
      </Layout>
    </div>
  );
};

export default Home;
