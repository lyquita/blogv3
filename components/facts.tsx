import Link from "next/link";
import { IFacts } from "../interface/facts";

const Facts:any = ({ factsData }) => {
  return (
    <div className="dark:text-[#DCA54C]">
      <h1 className="my-5 text-2xl dark:text-[#DCA54C]">
        Random facts about me
      </h1>
      <ul className="h-32 lg:h-48 overflow-hidden random-facts-list ">
        {factsData.map((item) => (
          <li className="lg:text-base" key={item.id}>
            {item.value}
          </li>
        ))}
      </ul>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400">
        <Link href="/facts">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Know More?
          </span>
        </Link>
      </button>
    </div>
  );
};

export default Facts;
