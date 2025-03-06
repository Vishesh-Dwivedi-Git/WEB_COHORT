import { Client } from "pg";

async function main(){
    const pgClient=new Client("postgresql://neondb_owner:7rYfCOK1Qdav@ep-super-sunset-a8q550r8-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
    try{
        await pgClient.connect();
        const Insertquery="insert into users(name , email) values($1,$2)"
        const result=await pgClient.query(Insertquery,["Apurv", "apurv@gmail.com"]);  //sql injection 
        console.log("insertion success",result);
    }
    catch(err){
        console.log("error during the insetion",err);
    }
    finally{
        await pgClient.end();
    }
}


async function  getUser(email:string){
    const pgClient=new Client("postgresql://neondb_owner:7rYfCOK1Qdav@ep-super-sunset-a8q550r8-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
    try{
        await pgClient.connect();
        const Insertquery ="select* from users where email=$1 ";
        const result=await pgClient.query(Insertquery,[email]);
        const user=result.rows.length;
        if(user>0){
            console.log(result.rows[0].name);
        }
        else {
            console.log("User not Found!!!");
        }
    }
   catch(err){
    console.log("error occured ",err);
   }
   finally {
    await pgClient.end();
   }

}

getUser("yes234");