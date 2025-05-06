"use client"
import axios from 'axios';


export default function SignInPage() {
    return (
        <div>
            <h1>Sign In</h1>
            <p>This is the sign in page</p>
            <input className='text-white bg-yellow-500' type="text" placeholder='username'></input>
            <input className='text-white bg-yellow-500' type="password" placeholder='password'></input>
            <button onClick={async ()=>{
                const res=await axios.post("http://localhost:3000/api/signIn",{
                    username:"test",
                    password:"test"
                });
                localStorage.setItem("token",res.data.token);
                console.log(res.data.token);
            }}>Sign IN </button> 
        </div>
    )
}