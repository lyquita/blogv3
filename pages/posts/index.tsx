import Layout from "../../components/layout";
import Image from "next/image";
import Avatar from "../../assets/image/avatar.jpeg"

const Post =() =>{
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
        <div>
      <h1 className="my-5 text-2xl ">Write something...</h1>
      <ul>
        <li>
          <a>
            <p className="text-base">我在过养老式的生活...</p>
            <p className="mb-3">October 08, 2020</p>
          </a>
        </li>
        <li>
          <a>
            <p className="text-base">我在过养老式的生活...</p>
            <p className="mb-3">October 08, 2020</p>
          </a>
        </li>
        <li>
          <a>
            <p className="text-base">我在过养老式的生活...</p>
            <p className="mb-3">October 08, 2020</p>
          </a>
        </li>
        <li>
          <a>
            <p className="text-base">我在过养老式的生活...</p>
            <p className="mb-3">October 08, 2020</p>
          </a>
        </li>
        <li>
          <a>
            <p className="text-base">我在过养老式的生活...</p>
            <p className="mb-3">October 08, 2020</p>
          </a>
        </li>
      </ul>
    </div>
        </main>
        <footer className="mt-12 flex justify-center">
        © 2020 Copyright: ✨✨ Hireoo ✨✨
        </footer>
       </Layout>
    )
}

export default Post;