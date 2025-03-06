import { selector } from "recoil";
import counter from "./atom";

const  oddEv=selector({
    key:"isEven",
    get:({get})=>{
        const count=get(counter);
        return count%2===0;
    }
});

export default oddEv;