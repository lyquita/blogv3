import Layout from "../components/layout";
import Image from "next/image";
import Avatar from "../assets/image/avatar.jpeg";
import axios from "axios";

export async function getServerSideProps() {
  const timelines = await axios.get("https://api-blog.hireoo.fun/timelines/");

  const timelinesData = timelines.data;

  return { props: { timelinesData } };
}

const Timeline = ({ timelinesData }) => {
  console.log("timelines", timelinesData);
  const year_2022 = 2022;
  const year_2021 = 2021;
  const year_2020 = 2020;
  const year_2019 = 2019;
  const year_2018 = 2018;
  const year_2017 = 2017;
  const year_2016 = 2016;
  const year_2015 = 2015;
  const year_2012 = 2012;
  const year_1997 = 1997;

  const year_2022_list = [];
  const year_2021_list = [];
  const year_2020_list = [];
  const year_2019_list = [];
  const year_2018_list = [];
  const year_2017_list = [];
  const year_2016_list = [];
  const year_2015_list = [];
  const year_2012_list = [];
  const year_1997_list = [];

  timelinesData.forEach((element) => {
    switch (element.year) {
      case year_2022:
        year_2022_list.push(element);
        break;
      case year_2021:
        year_2021_list.push(element);
        break;
      case year_2020:
        year_2020_list.push(element);
        break;
      case year_2019:
        year_2019_list.push(element);
        break;
      case year_2018:
        year_2018_list.push(element);
        break;
      case year_2017:
        year_2017_list.push(element);
        break;
      case year_2016:
        year_2016_list.push(element);
        break;
      case year_2015:
        year_2015_list.push(element);
        break;
      case year_2012:
        year_2012_list.push(element);
        break;
      case year_1997:
        year_1997_list.push(element);
        break;
      default:
        break;
    }
  });

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
          <h1 className="my-5 text-2xl ">Whats new in my life?</h1>
          <div className="my-5 lg:text-base">
            <h1 className="text-base font-bold"> 2022 </h1>
            <ul>
              {year_2022_list.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </div>
          <div className="my-5 lg:text-base">
            <h1 className="text-base font-bold"> 2021 </h1>
            <ul>
              {year_2021_list.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </div>
          <div className="my-5 lg:text-base">
            <h1 className="text-base font-bold"> 2020 </h1>
            <ul>
              {year_2020_list.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </div>
          <div className="my-5 lg:text-base">
            <h1 className="text-base font-bold"> 2019 </h1>
            <ul>
              {year_2019_list.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </div>
          <div className="my-5 lg:text-base">
            <h1 className="text-base font-bold"> 2018 </h1>
            <ul>
              {year_2018_list.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </div>
          <div className="my-5 lg:text-base">
            <h1 className="text-base font-bold"> 2017 </h1>
            <ul>
              {year_2017_list.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </div>
          <div className="my-5 lg:text-base">
            <h1 className="text-base font-bold"> 2016 </h1>
            <ul>
              {year_2016_list.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </div>{" "}
          <div className="my-5 lg:text-base">
            <h1 className="text-base font-bold"> 2015 </h1>
            <ul>
              {year_2015_list.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </div>{" "}
          <div className="my-5 lg:text-base">
            <h1 className="text-base font-bold"> 2012 </h1>
            <ul>
              {year_2012_list.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </div>
          <div className="my-5 lg:text-base">
            <h1 className="text-base font-bold"> 1997 </h1>
            <ul>
              {year_1997_list.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
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

export default Timeline;
