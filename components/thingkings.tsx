import moment from "moment";
import Link from "next/link";

const Thinkings = ({ thinkingsData }) => {
  return (
    <div className="dark:text-[#DCA54C]">
      <h1 className="my-5 text-2xl ">Im thinking</h1>
      <div className="h-96 overflow-hidden mb-4 sm:h-auto">

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-1">
        {thinkingsData.map((item) => (
          <div
            className="bg-white p-3 m-2 card shadow hover:text-[#5bd692] "
            key={item.id}
          >
            <p className="mb-3 lg:text-base ">{item.content}</p>
            <p>{moment(item.published_at).format('YYYY-MM-DD HH:mm')}</p>
          </div>
        ))}
      </div>
      </div>

      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <Link href="/thinkings">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Know More?
          </span>
        </Link>
      </button>
    </div>
  );
};

export default Thinkings;
