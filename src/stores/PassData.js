import { create } from "zustand";

const useLoginData = create((set) =>({
    data: {
        username: '',
        password: '',
        otherDetails: [],
    },
    setData: (data)=>{
        set(() =>{
            return {data: data}
        })
    },
})) 

export {
    useLoginData
}