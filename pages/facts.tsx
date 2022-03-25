import Layout from "../components/layout";
import Image from "next/image";
import Avatar from "../assets/image/avatar.jpeg";

const FactsPage = () => {

    return(
        <Layout>
                    <div className="flex my-10 justify-center">
          <div className="mr-2">
            <h1 className="text-5xl">HIREOO</h1>
            <p>Seize the day ☀️ ｜Build my idea 💡</p>
          </div>
          <div className="flex justify-center">
            <Image src={Avatar} width={80} height={80} className="rounded-full" alt=""/>
          </div>
        </div>
        <main>
        <h1 className="my-5 text-2xl dark:text-[#DCA54C]">Random facts about me</h1>
      <ul className=" random-facts-list">
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
        </main>
        <footer className="mt-12 flex  justify-center">
        © 2020 Copyright: ✨✨ Hireoo ✨✨
        </footer>
        </Layout>
    )
}

export default FactsPage;