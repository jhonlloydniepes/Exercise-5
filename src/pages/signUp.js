import { useRouter } from "next/router"
import { useState } from "react"
import { useLoginData } from "@/stores/PassData";


export default function SignUp(){
    const Router  = useRouter();

    const loginData = useLoginData(); 

    const[reg, setRegister] = useState({
        name: '',
        email: '',
        password: ''
    })

    const NameChane =(e)=>{
        setRegister({...reg, name: e.target.value})
    }

    const EmailChange =(e)=>{
        setRegister({...reg, email: e.target.value})
    }
    const PassChange =(e)=>{
        setRegister({...reg, password: e.target.value})
    }

    const ClickButton =()=>{    
        if(reg.name.length === 0){
            alert("Name required");
       } else if(reg.email.length === 0){
         
           alert("Email required");
       }else if(reg.password.length <8){
            alert("The password must consist atleast 8 characters");
       } else{
        Router.push('/login');
        loginData.setData({
            email: reg.email,
            password: reg.password,
        });    


       }
    }

    return (
        <div >
            <div className="container mx-auto ">
                <div className="flex justify-center">
                    <h1 className='m-20 text-4xl text-slate-900 font-bold tracking-wide cursor-pointer'>Scrum Board</h1>
                </div>
                <div className="flex justify-center">
                    <h2 className="mr-[300px] -mt-[20px] text-xl text-slate-900 font-bold tracking-wide cursor-pointer">Sign Up</h2>
                </div>
                    <div className="justine-center">
                    <div className="flex justify-center mt-3">
                      <div className="form-group col-5">
                            <label className="font-medium">Name*</label><br/>
                            <input onChange={NameChane} placeholder="Enter your name" className={`form-control -mt-[7] input w-80`} />  
                      </div>
                    </div>
                    <div className="flex justify-center mt-3">
                      <div className="form-group col-5">
                            <label className="font-medium">Email* </label><br/>
                            <input onChange={EmailChange} placeholder="Enter your email" className={`input form-control w-80 form-control -mt-[7] `} />  
                      </div>
                    </div>
                    <div className="flex justify-center mt-3">
                      <div className="form-group">
                            <label className="font-medium">Password*</label><br/>
                            <input onChange={PassChange} placeholder="Enter your password" className={`input w-80 form-control -mt-[7] mr-2 `} />  <br/>
                            <p className="text-gray-600 text-sm ml-1">Must be atleast 8 characters</p>

                            <div className="form-group mt-5">
                      <button onClick={ClickButton} className="button w-full bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none">Register</button>    
                      </div>

                      <div className="form-group mt-7 flex justify-center">
                      <p className="">Already have an Account?  </p><p className="text-blue-500 ml-1 font-medium">Log in</p>    
                      </div>
                      </div>
                      
                    </div>
                    </div>
            </div>
           
        </div>
        
    )
}
