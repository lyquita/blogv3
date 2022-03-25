import Link from "next/link";

const Writing = () => {
  return (
    <div className="dark:text-[#DCA54C]">
      <h1 className="my-5 text-2xl ">Write something...</h1>
      <ul>
        <li>
          <a className="hover:text-[#5bd692] hover:cursor-pointer">
            <p className="text-base">我在过养老式的生活...</p>
            <p className="mb-3">October 08, 2020</p>
          </a>
        </li>
        <li>
        <a className="hover:text-[#5bd692] hover:cursor-pointer">
            <p className="text-base">我在过养老式的生活...</p>
            <p className="mb-3">October 08, 2020</p>
          </a>
        </li>
        <li>
        <a className="hover:text-[#5bd692] hover:cursor-pointer">
            <p className="text-base">我在过养老式的生活...</p>
            <p className="mb-3">October 08, 2020</p>
          </a>
        </li>
        <li>
        <a className="hover:text-[#5bd692] hover:cursor-pointer">
            <p className="text-base">我在过养老式的生活...</p>
            <p className="mb-3">October 08, 2020</p>
          </a>
        </li>
        <li>
        <a className="hover:text-[#5bd692] hover:cursor-pointer">
            <p className="text-base">我在过养老式的生活...</p>
            <p className="mb-3">October 08, 2020</p>
          </a>
        </li>
        <li>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-800">
           <Link href="/posts/">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Know More?
            </span>
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Writing;
