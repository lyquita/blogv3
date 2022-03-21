import Link from "next/link";

const Thinkings = () => {
  return (
    <div>
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
