import { ChangeEvent } from "react";

let textData="";

const changeHandler=(e:ChangeEvent)=>{
    let target=e.target as HTMLInputElement;
    textData=target.value;
    console.log(textData);


}
const clickHandler=()=>{
    alert(textData);
    textData="Done";


}
const Controls=()=>{
    return (
        <>
        <input type="text" onChange={changeHandler} />
        <button onClick={()=>{alert('done')}}>Print</button>
        </>
    )
}
export default Controls