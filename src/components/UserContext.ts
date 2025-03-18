import { createContext } from "react"

export type UserType={
    name:string|null,
    setName:(args:string|null)=>void
}
export const UserContext=createContext<UserType|null>(null);
