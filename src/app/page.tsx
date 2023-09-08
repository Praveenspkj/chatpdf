import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import {LogIn} from "lucide-react"

export default async function Home() {
  const {userId} =await auth()
  const isAuth=!!userId;
  return (
     <div className="m-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center>">
            <h1 className="mr-3 text-5xl font-semibold">chat with any pdf</h1>
            <UserButton afterSignOutUrl="/"/>
          </div> 
          <div className="flex mt-2">
         {isAuth &&  <Button>GO TO CHATS</Button>}
          </div>
           <p className="max-w-xl mt-1 text-lg text-slate-600">
            join million of students and professor and understand the real power of openai
           </p>
           <div className="w-full mt-4">
               {isAuth ?(<h1>fileupload</h1>):(
                <Link href="/sign-in">
                <Button>login to get started
                   <LogIn className="w-4 h-4 ml-2"/>
                </Button>

                </Link>
               )}
           </div>
        </div>
       </div>
     </div>
  )
}
