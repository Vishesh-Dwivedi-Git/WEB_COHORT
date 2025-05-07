import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

console.log(process.env.NEXTAUTH_SECRET);

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',   //to show on the button 
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },     //to show on the input field
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {    //on Submit the Call Happens to this function

                  // check if user is valid or not
                //calll to db 
            //   const res = await fetch("/your/endpoint", {
            //     method: 'POST',
            //     body: JSON.stringify(credentials),
            //     headers: { "Content-Type": "application/json" }
            //   })
            //   const user = await res.json()
   
           const user ={
               id :"1",
              username:credentials?.username,
              password:credentials?.password
           }

           console.log(user);
              // If no error and we have user data, return it
              if  (user) {
                return user
              }
              // Return null if user data could not be retrieved
              return null
            }
          }),


          GitHubProvider({
            clientId:"sss",
            clientSecret: "ddd"
          }),
          GoogleProvider({
            clientId: "jjkd",
            clientSecret: "dkdkd"
          })


    ]
    ,
    secret:process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }