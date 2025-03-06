import { useEffect } from "react";
import { useState } from "react";


export function useDebounce(value, delay){
    const [debouncedValue, setDebouncedvalue]=useState(value);

    useEffect(()=>{
        const handler=setTimeout(
            ()=>{
                setDebouncedvalue(value);
            }, delay);

            return ()=>{
                clearTimeout(handler);
            }
    },[value, delay]);

    return debouncedValue;
}