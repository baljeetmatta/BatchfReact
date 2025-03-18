import { useContext } from "react";
import { UserContext, UserType } from "./UserContext";
import { Navigate, useNavigate } from "react-router-dom";

type PrivateProps={
    children:React.ReactNode
}
const PrivateRoute=(props:PrivateProps)=>{
   
    const user=useContext<UserType|null>(UserContext)
    console.log(user)
    return(
        <>
        

        {user?.name!=null?props.children:<Navigate to="/login"/>}
        </>
    )

}
export default PrivateRoute;
