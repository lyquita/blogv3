import Layout from "../../components/layout";
import Image from "next/image";
import Avatar from "../../assets/image/avatar.jpeg";
import axios from "axios";
import moment from "moment";

export async function getServerSideProps() {
  const thinkings = await axios.get("https://api-blog.hireoo.fun/thinkings/");

  const thinkingsData = thinkings.data;

  return { props: {thinkingsData} };
}

const Thinking = ({thinkingsData}) => {
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
      <h1 className="my-5 text-2xl ">Im thinking</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3">
      {thinkingsData.map((item) => (
          <div
            className="bg-white p-3 m-2 card shadow hover:text-[#5bd692] "
            key={item.id}
          >
            <p className="mb-3 lg:text-base ">{item.content}</p>
            <p>{moment(item.date).format('YYYY-MM-DD HH:mm')}</p>

          </div>
        ))}
      </div>
      </main>
      <footer className="mt-12 flex justify-center">
        © 2022 Copyright: ✨✨ Hireoo ✨✨ 
        <br></br>
        沪ICP备2021027123号-1
        </footer>
    </Layout>
    </div>
  );
};

export default Thinking;
