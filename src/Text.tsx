import { useState } from "react";

const Text=()=>{
    //let textData="";
    const [textData,setText]=useState("");

    const changeHandler=(e:React.ChangeEvent)=>{
        let target=e.target as HTMLInputElement;
       // textData=target.value;
       setText(target.value);


    }
    const printHandler=()=>{
        alert(textData);

    }
    const updateHandler=()=>{

        setText("Hi");
        
    }
    return (

        <>
        <input type="text" onChange={changeHandler} value={textData}/>
        <button onClick={printHandler}>Print</button>
        <button onClick={updateHandler}>Change</button>
        </>
    )



}
export default Text;