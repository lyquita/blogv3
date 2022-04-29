import Link from "next/link";

const Timeline = ({ timelinesData }) => {
  console.log("times", timelinesData);
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

      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
        <Link href="/timeline">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Know More?
          </span>
        </Link>
      </button>
    </div>
  );
};

export default Timeline;
