import { useContext, useRef } from "react";
import { UserContext, UserType } from "./UserContext";
import { Navigate, useNavigate } from "react-router-dom";

const LoginScreen = () => {
const navigate=useNavigate();
    const user=  useContext<UserType|null>(UserContext);

    const nameRef = useRef<HTMLInputElement | null>(null);
    const loginHandler = () => {
        //console.log(nameRef.current?.value)
        if(nameRef.current)
        user?.setName(nameRef.current?.value);

    }
    const logoutHandler=()=>{
        user?.setName(null);
        navigate("/login")
        
    }

    if(user?.name!=null)
        return <div><button onClick={logoutHandler}>Logout</button></div>
    return (
        <>
        
            <input type="text" ref={nameRef} />
            <button onClick={loginHandler}>Login</button>
        </>
    )

}
export default LoginScreen;
