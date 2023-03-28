import { useState } from "react";
import { useRouter } from "next/router"
import { usePassData } from "@/stores/PassData";


export default function ScrumBoard(){
    const [menu, setMenu] = useState(false);
    const Router  = useRouter();
    const passData = usePassData();

    function changeMenu(){
        setMenu(true);
    }

    const [display, setDisplay] = useState([])
    const [add, setAdd] = useState({
        title: '',
        description: '',
        index: -1,
       
    })
    const titleChange = (e)=>{
        setAdd({...add, title: e.target.value})
    }
    const descriptionChange = (e) =>{
        setAdd({...add, description: e.target.value})
    }
    const buttonCancel=()=>{ 
        setMenu(false);
    }

    const buttonProcced =()=>{    
        if(add.title === "" && add.description === ""){
           setMenu(true);
         }else{
            setDisplay([...display, add]);
            setAdd({title: '', description: ''})
            setMenu(false);
            console.log({title: add.title, description: add.description});
           
            passData.setData({
                    title: add.title,
                    description: add.description,
                });    
        }
    }

    const ClickBoard =()=>{
        Router.push('/AddBoard');
    }

    return(
        <div>
            <div className="container mx-auto ">
                <nav className='flex items-center flex-wrap m-5'>
                    <div className="inline-flex items-center"> <span className='text-xl text-slate-900 font-medium tracking-wide cursor-pointer' >Scrum Board</span></div>
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">                      
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-700 cursor-pointer font-bold items-center justify-center'>
                            Logout
                        </a>
                    </div>
                </nav>
            </div>
            <div className="mt-[80px] ml-[80px]">
                <h1 className="font-bold ...">Boards</h1>
            </div>
            <div className="mt-[10px] ml-[85px]">
                <div>
                <div className="">

                {!menu && (
                    <><div className="flex">
                        <div  >
             <ul className="grid grid-cols-3 gap-5 mx-10" >
                  {display.map((add, index) => {     
                     if (display.length > 0) { 
                       return(      
                        <li onClick={ClickBoard} className="w-80 h-32 shadow-2xl border border-gray-600 p-2 py-1 rounded-lg flex ">
                        <div className="grow ">
                            <div className="font-bold">{add.title}</div>
                            <div>{add.description}</div>
                            
                        </div>              
                    </li>  
                       )}
                  
                  })}  

<button className=" w-80 h-32 shadow-2xl border border-gray-600 p-2 py-1 rounded-lg " onClick={changeMenu} value={true}>  +  </button>
              </ul> 
                 </div>
                     </div>
        </>
                )} {menu &&
                    (
                        <center className="w-[500px] h-96 shadow-2xl border border-gray-600 p-2 py-1 rounded-lg">   
                        <div>
                        <input name="title" placeholder="Title" onChange={titleChange}
                         className="mt-[10px] w-[475px] input " type="text" />      
                    <textarea name="title" placeholder="Description" onChange={descriptionChange} 
                         className="h-64 w-[475px] border border-gray-400 p-2 py-1 rounded-md text-lg mt-[10px]" type="text" />
                    <button onClick={buttonCancel} type="w-[500px] h-96"
                     className="button w-32 mt-3 mr-4 shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none">Cancel</button>  
                    <button onClick={buttonProcced} type="button" 
                    className="button w-32 bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none">Add</button>    
                        </div>     
                        </center>  
                    )} 
                    </div>
                </div>
            </div>
        </div>
    )
}