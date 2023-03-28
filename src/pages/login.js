import { create } from "zustand";

const usePassData = create((set) =>({
    data: {
        title: '',
        description: '',
        
    },
    setData: (data)=>{
        set(() =>{
            return {data: data}
        })
    },
})) 

export {
    usePassData
}
