import { useState } from "react";
import Child from "./Child"

const Parent=()=>{
   // let data="Code";
   const [data,setData]=useState("Hi");

    return (
        <>
        Parent Data {data}
        <Child name={data} setData={setData}/>
        </>
    )
}
export default Parent;