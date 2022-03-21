import Link from "next/link";

const Layout =({children})=>{

    return(
       <div className="px-80 bg-[#FFFBF0] py-2 text-xs ">
           <ul className="flex w-full font-normal nav-list justify-center">
               <li>
                   <Link href="/">Home</Link>
               </li>
               <li>
                   <Link href="/posts/">Post</Link>
               </li>
               <li>
                   <Link href="/thinkings/">Thinking</Link>
               </li>
           </ul>
           <main>
            {children}   
           </main>
       </div>
    )
}
export default Layout;