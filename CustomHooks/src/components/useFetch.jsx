import { useEffect } from "react";
import { useState } from "react";


function useFetch(url){
    const [finalData, setFinalData]=useState({});
    const [loading,setLoading]=useState(false);

    async function getDetails() {
        setLoading(true);
        const response=await fetch(url)
        const json= await response.json();
        setFinalData(json);
        setLoading(false);
    
    }

    useEffect(()=>{
        getDetails();
    }
      ,
    [url]);

    return { finalData,
        loading}
       
    

}

export default useFetch;
