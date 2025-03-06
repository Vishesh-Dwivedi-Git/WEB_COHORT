


  export default async function signIn(){

     const data=await fetch('http://localhost:3000/api/user/detail');
     await new Promise((resolve)=>setTimeout(resolve,5000));
        const response=await data.json();
        return(
            <div>
                {response.name}
                {response.email}
            </div>
        )
    
 }