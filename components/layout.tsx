import Link from "next/link";

const Layout: React.FC<{}> =({children})=>{

    return(
       <div className="px-10 lg:px-80 bg-[#FFFBF0] py-2 text-xs sm:px-5">
           <ul className="flex w-full font-normal nav-list justify-center">
               <li className="lg:text-lg">
                   <Link href="/">Home</Link>
               </li>
               <li className="lg:text-lg">
                   <Link href="/posts/">Post</Link>
               </li>
               <li className="lg:text-lg">
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