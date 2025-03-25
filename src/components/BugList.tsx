import { useEffect, useState } from "react";
import { BugType } from "./BugApp"
import { RESOLVE_BUG, store } from "./BugStore";
type BugProps={
    bugs:BugType[];
}
//const BugList=(props:BugProps)=>{
    const BugList=()=>{
        const [bugs,setBugs]=useState<BugType[]>([])
       

        useEffect(()=>{
            setBugs(store.getState().bugs)  
          const unsub=  store.subscribe(()=>{
                setBugs(store.getState().bugs)  
            })
            //unsub();

           // setBugs(store.getState())
                

        },[])

         const resolveHandler=(e:React.MouseEvent,id:number)=>{

        // const existingBugs=bugs.map((item)=>{
        //     if(item.id==id)
        //         item.resolved=true;
        //     return item;
        // })
        
        store.dispatch({
            type:RESOLVE_BUG,
            payload:{
                id:Number(id)
            }
        })

    }

    return (
        <>
        <div className="grid grid-cols-4 gap-4">
            
           
        {
                bugs.map((item)=>{
                    return (
                    <>
                    <div className="flex gap-4 bg-gray-300 p-2">
                    <div>{item.description}</div>
                    <div>{item.resolved?'Resolved':<button onClick={(e)=>{resolveHandler(e,item.id)}} className="bg-red-300 p-2 text-white">Resolve</button>}</div>
                    </div>
                    </>
                    )
                })
            }
             </div>
        </>
    )
}
export default BugList;