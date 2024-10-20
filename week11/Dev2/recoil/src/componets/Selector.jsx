import {atom , selector} from 'recoil'

export const counterAtom=atom({
    default:0,
    key:"counter"
})

export const evenSeletor=selector({
    key:"isEvenSelector",
    get:function({get}) {
        const Currentcount=get(counterAtom);
        const isEven=(Currentcount%2==0);
        return isEven;
    }
})



