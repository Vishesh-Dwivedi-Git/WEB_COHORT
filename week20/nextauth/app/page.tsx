//Converting  to server side renbdering by the getServerSession

import { getServerSession } from "next-auth/next";

export default async function Home(){
   const session=await getServerSession();
   const user=await db.user.findOne({
      where:{
         id:session?.user.id
         username:session?.user.username
      }
   })
   return (
   

    <div>
       <h1>User Profil is {session.username}</h1>
        {
      JSON.stringify(session)
    }
    </div>
   );
}





















// "use client";
// import { SessionProvider, signOut,signIn, useSession } from "next-auth/react";
// import Image from "next/image";

// export default function Home(){
//   return (
//      <SessionProvider>
//       <RealHome />      
//       </SessionProvider>
//   )
// }



// function RealHome() {
//   const session = useSession();
//   return (
//     <div className="flex flex-col  items-center justify-center p-20 min-h-screen">
//       <h1>Vishesh dwivedi </h1>
//       <p>SWE or SDE @Google</p>

//       {session.status==="authenticated" && <button onClick={()=>signOut()}>logout</button>}
//       {session.status==="unauthenticated" && <button onClick={()=>signIn()}>login</button>}
//       {session.status==="loading" && <h1>Loading...</h1>}
//       {

//       JSON.stringify(session.data)
//       }

      
//     </div>
//   );
// }  // This is Client Side rendered component in the session part , where as the rest comes as server side rendered 
// //Like the Sesssion data and logical Renderding as the Session is CSR and the rest is SSR

