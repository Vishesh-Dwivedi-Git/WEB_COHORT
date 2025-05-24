"use client";

import TextInput from "@repo/ui/text-input";

export default function ChatRoom(){
      return (
         <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100vh',
            fontSize: '24px',
            color: '#333',
            
         }}>
            <div>
               Chat Room 
            </div>

            <div> 
               
                      <TextInput placeholder="Enter the Room" onChange={()=>{
                        alert(
                          "Message is Sent"
                        );
                      }}  ></TextInput>
            </div>
            
         </div>
      )
}