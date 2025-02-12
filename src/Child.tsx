type ChildProps={
    name:string
    setData:(args:string)=>void;
}
const Child=(props:ChildProps)=>{
    const changeHandler=()=>{
      //  props.name="New Value";
      props.setData("Bye");
      

    }
    return (
        <>
       <div>Child Component {props.name}</div>
       <button onClick={changeHandler}>Change</button>
        </>
    )
}
export default Child;