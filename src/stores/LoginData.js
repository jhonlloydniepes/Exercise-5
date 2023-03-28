import { create } from "zustand";

const useLoginData = create((set) =>({
    data: {
        email: '',
        password: '',
       
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
