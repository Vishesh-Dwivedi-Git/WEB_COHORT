'use client';

import { Button } from "@repo/ui/button";
import TextInput from "@repo/ui/text-input";
import { useRouter as userouter } from "next/navigation";
export default function Home() {
  const router=userouter();
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color:' white',
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
    }}>

      <h1>Chat App</h1>
    <br></br>
      <p>welcome to Chat App</p>
      <TextInput placeholder="Enter the Room" onChange={()=>{
        alert(
          "rOOM JOINED"
        );
      }}  ></TextInput>
      <Button appName={""} onClick={
        ()=>{
           router.push('/chat');
        }
      }>Join the room</Button>
    </div>
  );
}
