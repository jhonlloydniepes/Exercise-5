import { useState } from "react"
import { usePassData } from "@/stores/PassData";


export default function AddBoard(){
    const {data} = usePassData(); 

    const [display2, setDisplay2] = useState([]);
    const [AddBoard, setAddBoard] = useState({
        Title: "",
        CardTitle: "",
        CardDescription: ""
    })
    const titleChange =(e) =>{
        setAddBoard({...AddBoard, Title: e.target.value });
    }
    const BoarddescriptionChange =(e) =>{
        setAddBoard({...AddBoard, CardDescription: e.target.value });
      }
 
      const BoardtitleChange =(e) => { 
         setAddBoard({...AddBoard, CardTitle: e.target.value});
      }

      const BoardbuttonProcced =() =>{
             setDisplay2([...display2, AddBoard]);
        setAddBoard({CardTitle: '', CardDescription: ''});
             setMenu2(true);
         console.log({Title: AddBoard.CardTitle, CardDescription: AddBoard.CardDescription});
      }

    const buttonProcced =() =>{
        setDisplay2([...display2, AddBoard]);
            setAddBoard({CardTitle: ''});
            setMenu(false);
            setMenu2(true);
            console.log({Title: AddBoard.Title});
    }

    const [menu , setMenu] = useState(false); 
    const changeMenu =() =>{
        setMenu(true);
    }
    const buttonCancel =() =>{
        setMenu(false);
        setMenu2(true);
    }

    const [menu2, setMenu2]= useState(false);
    const changeMenuBoard = () =>{
        setMenu2(false);
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
                <div className="font-bold ...">{data.title}</div>
                <div>{data.description}</div>
            </div>


            <div className="mt-[10px] ml-[85px]">
                <div>
                <div className="">

                {!menu && (
                    <><div className="flex">
                        <div  >
             <ul className="grid grid-cols-3 gap-5 mx-10" >
             {display2.map((AddBoard, index) => {     
                     if (display2.length > 0) { 
                       return(      
                        <li className=" shadow-2xl border border-gray-600 p-2 py-1 rounded-lg flex ">
                        <div className="grow ">
                            <div className="font-bold ml-3 mt-2">{AddBoard.Title}</div>  
                     {!menu2 && (
                              <>
                              <div>
                                           <center className="w-[300px] h-56 shadow-2xl border border-gray-600 p-2 py-1 rounded-lg">
                                               <div>
                                                   <input name="title" placeholder="Title" onChange={BoardtitleChange}
                                                       className="mt-[10px] w-[280px] input " type="text" />
                                                   <textarea name="title" placeholder="Description" onChange={BoarddescriptionChange}
                                                       className="h-[98px] w-[280px] border border-gray-400 p-2 py-1 rounded-md text-lg mt-[10px]" type="text" />
                                                   <button type="w-[500px] h-96" onClick={buttonCancel}
                                                       className="button w-32 mt-3 mr-4 shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none">Cancel</button>

                                                   <button type="button" onClick={BoardbuttonProcced}
                                                       className="button w-32 bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none">Add</button>
                                               </div>
                                           </center>
                                       </div></>


  
                        )} { menu2 &&(
                            <>
                            <ul >
                                {display2.map((AddBoard) =>{
                                    if(display2.length > 0){
                                        return ( 
                                            <li >
                                            <div className="grow ">
                                                <div >{AddBoard.CardTitle}</div>
                                                <div >{AddBoard.CardDescription}</div>    
                                                </div>
                                                </li>
                                        )
                                    }
                                } )}
                            </ul>

                            <button onClick={changeMenuBoard}
                                           className=" w-32 mt-2 mr-[2050px] ml-3 cursor-pointer flex"> <p className="flex text-2xl mt-[-7px] mr-2">+</p> Add a card</button></>           
             )}
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
                        <input name="title" placeholder="Title" onChange={titleChange}
                         className="mt-[10px] w-[475px] input " type="text" />   
                         <button onClick={buttonCancel} type="w-[500px] h-96"
                     className="button w-32 mt-3 mr-4 shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none">Cancel</button>  
                    <button onClick={buttonProcced} type="button" 
                    className="button w-32 bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none">Add</button>
                        </center>  
                    )} 
                    </div>
                </div>
            </div>
        </div>
    )
}   