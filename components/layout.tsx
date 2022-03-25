import Link from "next/link";
import { useTheme } from "next-themes";

const Layout: React.FC<{}> =({children})=>{
  const {systemTheme, theme, setTheme} = useTheme();

    return(
       <div className="px-10 lg:px-80 bg-[#FFFBF0] dark:bg-[#0e0c0c] dark:bg-opacity-90 py-2 text-xs sm:px-5 ">
           <ul className="flex w-full font-normal nav-list justify-center dark:text-[#DCA54C] lg:text-lg">
               <li >
                   <Link href="/">Home</Link>
               </li>
               <li >
                   <Link href="/posts/">Post</Link>
               </li>
               <li > 
                   <Link href="/thinkings/">Thinking</Link>
               </li>
               <li className="flex">
                 <button className="btn btn-xs mr-1" onClick={()=>{setTheme('dark')}}>🌃</button>
                 <button className="btn btn-xs" onClick={()=>{setTheme('light')}}>☀️</button>
               </li>
           </ul>
           <main>
            {children}   
           </main>
       </div>
    )
}
export default Layout;