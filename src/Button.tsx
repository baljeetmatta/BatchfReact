type ButtonProps={
    value:string
    click:(e:React.MouseEvent<HTMLButtonElement>)=>void
}
// const clickHandler=()=>{

//     alert("Clicked on button")
// }
function Button(props:ButtonProps)
{
    return (
        <>
        <button onClick={props.click}>{props.value}</button>
        </>
    )
}
export default Button;
