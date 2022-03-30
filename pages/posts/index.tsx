import Layout from "../../components/layout";
import Image from "next/image";
import Avatar from "../../assets/image/avatar.jpeg"
import axios from 'axios';
import Link from "next/link";

export async function getServerSideProps(){
  const posts = await axios.get('https://api-blog.hireoo.fun/posts/')

  const postsData = posts.data

  return { props : {postsData}}
}


const Post =({postsData}) =>{
  console.log('pst', postsData)
if(postsData){
  return(
    <div className="dark:text-[#DCA54C]">
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
      {postsData.map((item) => (
        <li key={item.id}>
          <Link href={`/posts/${item.id}`}>
            <a className="hover:text-[#5bd692] hover:cursor-pointer">
              <p className="text-base">{item.Title}</p>
              <p className="mb-3">{item.published_at}</p>
            </a>
          </Link>
        </li>
      ))}
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
      </main>
      <footer className="mt-12 flex justify-center">
      © 2022 Copyright: ✨✨ Hireoo ✨✨
      </footer>
     </Layout>
     </div>
  )
}
else{
  return(
    <div className="dark:text-[#DCA54C]">
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
   Nothing there
 </div>
     </main>
     <footer className="mt-12 flex justify-center">
     © 2022 Copyright: ✨✨ Hireoo ✨✨
     </footer>
    </Layout>
    </div>
  )
}

    
}

export default Post;