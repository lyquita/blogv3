import Link from "next/link";

const Layout: React.FC<{}> =({children})=>{

    return(
       <div className="px-10 lg:px-80 bg-[#FFFBF0] py-2 text-xs sm:px-5">
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