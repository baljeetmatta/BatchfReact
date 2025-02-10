import { useState } from "react";


// const Login=()=>{

//     // let obj={name:"test",age:20};
//     // let {name}=obj;
// const [data,setData]=useState("Hi");


//     // let state=useState();
//     // let data=state[0];
//     // let setData=state[1];

//     //console.log(state);
//     const clickHandler=()=>{
//        // data="Bye";
//        setData("Bye");

//        // console.log(data);
//     }
// //let data="Hi";
//     return (
//         <>
//         <div>The value is {data}</div>
//         <button onClick={clickHandler}>Change</button>
        
//         </>
//     )
// }
type UserType={
    name:string,
    email:string
}
const Login=()=>{

    const [isLoggedIn,setLogin]=useState(false);
    // const [user,setUser]=useState<UserType|null>(null);
    const [user,setUser]=useState<UserType |null>(null);

    const loginHandler=()=>{
        setLogin(true);
        setUser({name:'Code',email:"email@"})

    }
    const logoutHandler=()=>{
        setLogin(false);
        //setUser({} as UserType)
        setUser(null);

        
    }
    return (
        <>
        {isLoggedIn?'Login':'Logout'}
        {user?.name} {user?.email}
        {/* <button onClick={()=>{setLogin(true)}}>Login</button>
        <button onClick={()=>{setLogin(false)}}>Logout</button> */}
        <button onClick={loginHandler}>Login</button>
        <button onClick={logoutHandler}>Logout</button>
        </>
    )
}
export default Login;
