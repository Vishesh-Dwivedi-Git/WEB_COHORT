import { useState,useEffect } from "react";

export function useFetch(url){
    const [error,setError]=useState(null);
    const [loading ,setLoading]=useState(false);
    const [data,setData]=useState([]);
    
        async function getD(url) {
            setLoading(true);
            try{const resp=await fetch(url);
                const data= await resp.json();
                setData(data);
            }
            catch(e){
                setError(e);
            }
            finally{
                setLoading(false);
            }
            
        }
    
    useEffect(
        ()=>{
            getD(url)
        },[url]  //when the url changes then to call the fetch function
    );

    return (
        {data,loading,error}
    );

}


import { useState, useEffect } from 'react';
import './App.css';
import { useFetch } from './components/useFetch';

function App() {
  const [localdata, setLocalData] = useState(null);
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos/");

  useEffect(() => {
    if (data) {
      setLocalData(data);
    }
  }, [data]);  // Update localdata only when data changes

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : error ? (
        <h1>Error: {error}</h1>
      ) : (
        <ul>
          {localdata && localdata.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
