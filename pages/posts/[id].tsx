import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const posts = await axios.get(`https://api-blog.hireoo.fun/posts/${id}`);

  const postsData = posts.data;

  return { props: { postsData } };
}

const Post = (props) => {
  const { id, markdown, published_at, title } = props.postsData;

  if (props.postsData) {
    return (
      <div className="dark:text-[#DCA54C]">
        <Layout>
          <article className="py-16 px-6 sm:px-8">
            <header>
              <h1 className="flex flex-col items-center">
                <span className="text-indigo-600 font-semibold tracking-wide uppercase">
                  Introducing
                </span>
                <span className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {title}
                </span>
              </h1>
              <hr className="mt-8 border-t-2 w-20 mx-auto" />
            </header>
            <div className="mt-8 mx-auto prose lg:prose-xl overflow-auto dark:text-[#DCA54C]">
              <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </div>
          </article>
        </Layout>
      </div>
    );
  } else {
    return (
      <article className="py-16 px-6 sm:px-8">
        <div className="mt-8 mx-auto prose lg:prose-xl overflow-auto">
          No Conent
        </div>
      </article>
    );
  }
};

export default Post;
