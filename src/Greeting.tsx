// function Greeting()
// {
//     return (
//         <>
//         </>
//     )
// }
// export default Greeting
// const Greeting=()=>{
//     return (
//         <>
//         </>
//     )
// }
// export default Greeting;
// const Greeting:React.FC=()=>{
//     return (
//         <>
//         </>
//     )
// }
// export default Greeting;


// import React from 'react';

// interface Props {
  
// }

// const Component: React.FC<Props> = ({  }) => {
//   return (
//     <></>
//   );
// };

// export default Component;
type ObjectType={
    name:string,
    age:number
}
type GreetProps={
    name:string,
    years?:number,
    data?:ObjectType,
    children?:React.ReactNode
}
function Greeting(props:GreetProps)
{
    return (
    <>
    <div>Welcomet to {props.name} - {props.years}</div>
    <p>{props.data?.name} -{props.children}</p>
    </>
    )
}
export default Greeting;