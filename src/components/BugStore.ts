let lastid=1;
import { createStore } from "redux";
import { BugType } from "./BugApp";
type ActionType={
    type:string,
    payload:{
        description?:string,
        id?:number
    }
}
export const ADD_BUG="bugAdded";
export const RESOLVE_BUG="bugResolved";
/*
[
    {
    }
]

{
    bugs:[
        {
        }    
    ]
}
*/
type StateType={
    bugs:BugType[];
}
const BugReducer=(state:StateType={bugs:[]},action:ActionType)=>{

    if(action.type==ADD_BUG)
    {
            
        const updatedState=[...state.bugs];
        updatedState.push({
            id:lastid++,
            description:action.payload.description,
            resolved:false
        })
        return {...state,bugs:updatedState};
    
    }
    if(action.type==RESOLVE_BUG)
        {
                
            const updatedState=state.bugs.map((item)=>{
                if(item.id==Number(action.payload.id))
                {
                    item.resolved=true
                }
                return item;
            })
            return {...state,bugs:updatedState};

        
        }
    return state;

}
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"
const config={
    key:'bugroot',
    storage
    
}

const pReducer=persistReducer(config,BugReducer);
export const store=createStore(pReducer);
export const pstore=persistStore(store);


