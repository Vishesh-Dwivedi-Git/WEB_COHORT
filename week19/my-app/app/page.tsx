
import Link from "next/link";
import axios from "axios";

async function getUserDetail(): Promise<any> {
  const response= await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return response.data
}

export default async function Home() {
  const data=await getUserDetail();
   
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1>welcome to App TODO APP</h1>
   <h1>{data.name}</h1>
   <p>{data.email}</p>
    <Link href="/signin">Sign In </Link>
    <Link href="/signout">Sign Out</Link>
    </div>
  );
} //now the code runs through SSR
//button uses client componment 

// export default function Home() {
//   const [data, setData] = useState<any >({});
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  
//       setData(response.data);
//     };
//     fetchData();
//   }, []);
 
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//     <h1>welcome to App TODO APP</h1>
//    <h1>{data.name}</h1>
//    <p>{data.email}</p>
//     <Link href="/signin">Sign In </Link>
//     <Link href="/signout">Sign Out</Link>
//     </div>
//   );
// }  this onrendering calling  the old way