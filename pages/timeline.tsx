import Layout from "../components/layout"
import Image from "next/image"
import Avatar from "../assets/image/avatar.jpeg"

const Timeline =() => {


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
        </main>
        <footer className="mt-12 flex justify-center">
        © 2020 Copyright: ✨✨ Hireoo ✨✨
        </footer>
        </Layout>
    )
}

export default Timeline