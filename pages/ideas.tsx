import AdminDance from "../components/ideas/admin-dance";
import Layout from "../components/layout";
import Image from "next/image";
import Avatar from "../assets/image/avatar.jpeg";
import Fimo from "../components/ideas/fimo";

const Ideas = () => {
  return (
    <div>
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
        <div>
          <AdminDance />
          <Fimo />
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

export default Ideas;
