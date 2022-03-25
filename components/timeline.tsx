import Link from "next/link";

const Timeline = () => {
  return (
    <div className="dark:text-[#DCA54C]">
      <h1 className="my-5 text-2xl ">Whats new in my life?</h1>
      <div className="my-5 lg:text-base">
        <h1 className="text-base font-bold"> 2020 </h1>
        <ul>
          <li>
            2020-09-18: Decide to learn about React, and aim to build my idea
          </li>
          <li>2020-05-24：Start to learning hip-hop dance</li>
          <li>2020-05-14： The first time to start my side hustle business</li>
        </ul>
      </div>
      <div className="my-5 lg:text-base">
        <h1 className="text-base font-bold"> 2019 </h1>
        <ul>
          <li>
            2019-07-01：The first time to take responsibility for the whole
            project, unforgettable months during this period.
          </li>
          <li>2020-05-24：Start to learning hip-hop dance</li>
          <li>2020-05-14： The first time to start my side hustle business</li>
        </ul>
      </div>
      <div className="my-5 lg:text-base">
        <h1 className="text-base font-bold"> 2018 </h1>
        <ul>
          <li>
            2020-09-18: Decide to learn about React, and aim to build my idea
          </li>
          <li>2020-05-24：Start to learning hip-hop dance</li>
          <li>2020-05-14： The first time to start my side hustle business</li>
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
