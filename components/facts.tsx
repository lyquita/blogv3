import Link from "next/link";

const Facts = () => {
  return (
    <div className="dark:text-[#DCA54C]">
      <h1 className="my-5 text-2xl dark:text-[#DCA54C]">Random facts about me</h1>
      <ul className="h-32 lg:h-48 overflow-hidden random-facts-list ">
        <li className="lg:text-base">
          🥛 I drink a bottle of milk tea every day without ice and sugar, but
          pearls.
        </li>
        <li className="lg:text-base">
          🗺 I wont stay at home during my weekend, I love to explore cafe &
          restaurant ... Find a cozy spot in a city make me relax.🤟
        </li>
        <li className="lg:text-base">
          🤡 Sometimes I will get messy on my speaking🙇‍, believe me, I will
          train harder to organize my communication.
        </li>
        <li className="lg:text-base">
          📸 I love to record my life and share my opinion of the world. But I
          seldom shoot video recently due to didnt have time ...
        </li>
        <li className="lg:text-base">
          📝 Although I get used to writing stuff in a big moment, it quite
          depends on my mood.
        </li>
        <li className="lg:text-base">
          💃🏾 I have been studying Hip Hop for around three months. As a
          freshman, and apparently have no talent of dancing, but I still enjoy
          shaking my body ~ just keep moving ~~
        </li>
        <li className="lg:text-base">
          🥯 Seriously, I think Im a bagel lover🥯, I have tasted most of the
          bagel in shanghai. Mexico food is quite fit for my taste, especially
          burrito🌯 and taco🌮 ~~~
        </li>
        <li className="lg:text-base">
          👀 Do nothing, or do everything I can. Before I real think throughout
          it, I wont take my first step.
        </li>
        <li className="lg:text-base">
          📒I love to plan for the next day, following my schedule gives me
          self-achievement, especially like the KanBan could reduce my anxiety,
          it tells me a clear direction. 😸
        </li>
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
