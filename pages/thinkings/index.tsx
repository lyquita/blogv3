import Layout from "../../components/layout";
import Image from "next/image";
import Avatar from "../../assets/image/avatar.jpeg";

const Thinking = () => {
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
      <div className="grid grid-cols-3">
        <div className="bg-white p-3 m-2 shadow">
          <p className="mb-3 lg:text-base">
            feel down in the dumps, for no reason... odd...
          </p>
          <p>2020-11-14 19:36</p>
        </div>
        <div className="bg-white p-3 m-2 shadow">
          <p className="mb-3 lg:text-base">
            feel down in the dumps, for no reason... ods, for no reason...
            odd...
          </p>
          <p>2020-11-14 19:36</p>
        </div>
        <div className="bg-white p-3 m-2 shadow">
          <p className="mb-3 lg:text-base">
            feel down in the dumps, for no s, for no reason... ods, for no
            reason... od... odd...
          </p>
          <p>2020-11-14 19:36</p>
        </div>
        <div className="bg-white p-3 m-2 shadow">
          <p className="mb-3 lg:text-base">
            feel down in the dumps, for no reasons, for no reason... ods, for no
            reason... od... odd...
          </p>
          <p>2020-11-14 19:36</p>
        </div>
        <div className="bg-white p-3 m-2 shadow">
          <p className="mb-3 lg:text-base">
            feel down in the dumps, for no reason... odd...
          </p>
          <p>2020-11-14 19:36</p>
        </div>
        <div className="bg-white p-3 m-2 shadow">
          <p className="mb-3 lg:text-base">
            feel down in the dumps, for no reason... odd...
          </p>
          <p>2020-11-14 19:36</p>
        </div> <div className="bg-white p-3 m-2 shadow">
          <p className="mb-3 lg:text-base">
            feel down in the dumps, for no reason... odd...
          </p>
          <p>2020-11-14 19:36</p>
        </div> <div className="bg-white p-3 m-2 shadow">
          <p className="mb-3 lg:text-base">
            feel down in the dumps, for no reason... odd...
          </p>
          <p>2020-11-14 19:36</p>
        </div> <div className="bg-white p-3 m-2 shadow">
          <p className="mb-3 lg:text-base">
            feel down in the dumps, for no reason... odd...
          </p>
          <p>2020-11-14 19:36</p>
        </div> <div className="bg-white p-3 m-2 shadow">
          <p className="mb-3 lg:text-base">
            feel down in the dumps, for no reason... odd...
          </p>
          <p>2020-11-14 19:36</p>
        </div> <div className="bg-white p-3 m-2 shadow">
          <p className="mb-3 lg:text-base">
            feel down in the dumps, for no reason... odd...
          </p>
          <p>2020-11-14 19:36</p>
        </div>
      </div>
      </main>
      <footer className="mt-12 flex justify-center">
        © 2020 Copyright: ✨✨ Hireoo ✨✨
        </footer>
    </Layout>
    </div>
  );
};

export default Thinking;
