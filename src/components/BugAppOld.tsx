import { useReducer, useRef, useState } from "react"
import BugList from "./BugList";

///input text, button, datadisplay
export type BugType={
    id:number,
    description:string|undefined,
    resolved:boolean
}
let lastid=1;
const BugApp=()=>{

    const resolveHandler=(e:React.MouseEvent,id:number)=>{

        const existingBugs=bugs.map((item)=>{
            if(item.id==id)
                item.resolved=true;
            return item;
        })
        setBugs(existingBugs);


    }
const [bugs,setBugs]=useState<BugType[]>([])
const addHandler=()=>{
    const existingBugs=[...bugs];
    existingBugs.push({
        id:lastid++,
        description:inputRef.current?.value,
        resolved:false
    })
    setBugs(existingBugs);

}

    const inputRef=useRef<HTMLInputElement|null>(null)
    return(
            <>
            <input className="border" type="text" ref={inputRef}/>
            <button className="text-white bg-red-300 p-2 rounded-md" onClick={addHandler}>Add</button>
            <BugList bugs={bugs}/>

            </>

    )
}
export default BugApp;
