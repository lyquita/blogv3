import Layout from "../components/layout";
import Image from "next/image";
import Avatar from "../assets/image/avatar.jpeg";
import axios from "axios";
import { IFacts } from "../interface/facts";

export async function getServerSideProps() {
  const facts = await axios.get("https://api-blog.hireoo.fun/facts/");

  const factsData: IFacts[] = facts.data;

  return { props: {factsData} };
}
const FactsPage = ({factsData}) => {
  return (
    <div className="dark:text-[#DCA54C]">
      <Layout>
        <div className="flex my-10 justify-center">
          <div className="mr-2">
            <h1 className="text-5xl">HIREOO</h1>
            <p>Seize the day ☀️ ｜Build my idea 💡</p>
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
        <main>
          <h1 className="my-5 text-2xl dark:text-[#DCA54C]">
            Random facts about me
          </h1>
          <ul className="random-facts-list ">
            {factsData.map((item) => (
              <li className="lg:text-base" key={item.id}>
                {item.value}
              </li>
            ))}
          </ul>
        </main>
        <footer className="mt-12 flex  justify-center">
          © 2022 Copyright: ✨✨ Hireoo ✨✨
        </footer>
      </Layout>
    </div>
  );
};

export default FactsPage;
