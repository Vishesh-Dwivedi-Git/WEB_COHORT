
import axios from "axios"
import { useEffect,useState } from "react";

export default async function User(){
  const response = await axios.get("");
  const data=response.data;

  console.log("hi");

  return <div> 
    User Page {data.name}
  </div>
}
