import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


export async function getServerSideProps(){
  
  const posts = await axios.get('https://api-blog.hireoo.fun/posts/')

  const postsData = posts.data

  return { props : {postsData}}
}

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [postDetail, setPostDetail] = useState<any>()
  const [markdown, setMarkdown] = useState();

  useEffect(()=>{
    axios.get(`https://api-blog.hireoo.fun/posts/${id}`)
    .then(res=> {setPostDetail(res.data), setMarkdown(res.data.markdown)})
    .catch(err => {throw new Error(err)})
  },[id])


  if(postDetail){
    return (
      <div>
          <Layout>
          <article className="py-16 px-6 sm:px-8">
            <header>
                <h1 className="flex flex-col items-center">
                    <span className="text-indigo-600 font-semibold tracking-wide uppercase"> Introducing </span>
                    <span className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl"> {postDetail.Title}</span>
                </h1>
                <hr className="mt-8 border-t-2 w-20 mx-auto"/>
            </header>
            <div className="mt-8 mx-auto prose lg:prose-xl overflow-auto">
           <ReactMarkdown  children={markdown} remarkPlugins={[remarkGfm]}/>
            </div>
          </article>

    </Layout>
    </div>
  );
  }
  else{
    return(
      <article className="py-16 px-6 sm:px-8">
      <div className="mt-8 mx-auto prose lg:prose-xl overflow-auto">
      No Conent
      </div>
    </article>
    )
  }
 
  
};

export default Post;
