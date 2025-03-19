
// // import compose from "lodash/fp/compose.js"
// // import pipe from "lodash/fp/pipe.js"
// // const trimData=str=>str.trim();
// // const toLower=str=>str.toLowerCase();
// // let input= "   Javascript  ";
// // //let out="<div>"+toLower(trimData(input))+"<div>"
// // //console.log(out);
// // // function WrapData(element,str){
// // //     let out=`<${element}>${str}</${element}>`;
// // //     //console.log(out);
// // //     return out;

// // // }
// // function WrapData(element){
// //     return function(str)
// //     {
// //         return `<${element}>${str}</${element}>`;

// //     }
// // }
// // //const result=WrapData(toLower(trimData(input)));
// // //console.log(result);
// // //const fn=compose(WrapData,toLower,trimData);
// // const fn=pipe(trimData,toLower,WrapData("div"));
// // //curring
// // const result=fn(input);
// // console.log(result);

// // // function add(a,b)
// // // {
// // //     return a+b;
// // // }
// // // console.log(add(10,2));

// // // function add(a)
// // // {
// // //         return function(b)
// // //         {
// // //             return a+b;
// // //         }
// // // }
// // // let f=add(5);
// // // console.log(f(10));








// // // // //Functional Programming
// // // // //Function as first class citizen
// // // // // function sayHello()
// // // // // {
// // // // //     console.log("Hello World");
// // // // // }
// // // // // //sayHello();
// // // // // let fn=sayHello;
// // // // // fn();


// // // // //function as argment
// // // // // function sayHello()
// // // // // {
// // // // //     //return "Hello";
// // // // //     console.log("Hello");

// // // // // }

// // // // // function  greet(fnMessage)
// // // // // {

// // // // //         console.log(fnMessage());

// // // // // }
// // // // // greet(sayHello);

// // // // // function greet()
// // // // // {
// // // // //     return function()
// // // // //     {
// // // // //         return "Hello"
// // // // //     }
// // // // // }
// // // // // //console.log(greet());
// // // // // //let fn=greet();
// // // // // //console.log(fn());
// // // // // console.log(greet()());
// // // // // //HIGHER ORDER FUNCTIONS

// // // // // const trimData=(str)=>
// // // // //     {
// // // // //         return str.trim();
// // // // //     }
// // // // const trimData=str=>str.trim();
// // // // const toLower=str=>str.toLowerCase();
// // // // let input= "   Javascript  ";
// // // // //let out="<div>"+toLower(trimData(input))+"<div>"
// // // // //console.log(out);
// // // // function WrapData(str){
// // // //     let out=`<div>${str}</div>`;
// // // //     console.log(out);

// // // // }
// // // // const fn=compose(WrapData,toLower,trimData);
// // // // fn(input);

// // // // //WrapData(toLower(trimData(input)))
// // // import { Map } from "immutable";
// // // let book=Map({"title":"ABC"})
// // // console.log(book.get("title"));
// // // const book1=book.set("IsPublished","false");
// // // console.log(book.toJS(),book1.toJS());

// // // import { produce } from "immer";
// // // let book={"title":"ABC"};
// // // function publish(book){
// // //     const obj=produce(book,draft=>{
// // //         draft.isPublished=true;
// // //     })
// // //     console.log(obj,book)
// // // }
// // // publish(book);
// //string 
// // let str="Javascript";
// // //immutable
// // const str1= str.toLocaleLowerCase();
// // console.log(str1, str);
// //const person={name:"Code"};
// // const data=person;
// // data.name="Coding";
// // const data={...person};
// // data.name="Coding";
// // const person={
// //     name:"Code",
// //     age:10,
// //     address:{
// //         "city":"abc"
// //     }
// // }

// // const data={
// //     ...person,
// //     address:{
// //         ...person.address
// //     }};
// // data.name="Coding"
// // data.address.city="XYZ";
// // console.log(data,person);
// // import {Map} from "immutable";
// // let book=Map({"title":"My First Book"});
// // //api for MAP -> get, set

// // function publish(book)
// // {
// //    const nbook= book.set("isPublished",true)
// //    //console.log(nbook.toJS())
// //    return nbook;
// //    // book.isPublished=true
// // }
// // const nbook=publish(book);
// // console.log(nbook.toJS());
// import { produce } from "immer";
// let book={"title":"First book"};
// function publish(book)
// {
//    let obj= produce(book,(draftBook)=>{
//         draftBook.isPublished=true;

//     })
//    // console.log(obj);
//     return obj;
// }
// const newbook=publish(book);
// console.log(book,newbook)

//REDUX STORE
//actions       store               reducer
//events        storage/context     eventHandler-> store, action ->returns the updated store
//1. Design a Store(Storage)
//dispatch method
//Bug Tracking 
// [ {id:number,description:string,resolved:boolean }]
//one reducer 
/*
{
    bugs:[
    {
        id:number,description:string,resolved:boolean
    }
    ],
    currentUser:{username:,userid}
    cart:[{}]

}

*/
//2. Add, Resolved, Delete
//Object
/*
    {
        type:"bugAdded",
        payload:{
            description:
        }
    }
        {
        type:"bugResolved",
        payload:{
            id:
        }
    }

*/
//3. REDUCER
// SIMPLE function (store,actions)->store->existing store
// actions->action object , type, payload
//return updateStore

//4. Setup Store
let lastid=1;
function reducer(state=[],actions){

    if(actions.type=="bugAdded")
    {
        return (
            [...state,{
                id:lastid++,
                descrition:actions.payload.description,
                resolved:false
            }]
        )

    }
    else if(actions.type=="bugResolved")
    {
            const updateState=state.map((item)=>{
                if(item.id==actions.payload.id)
                    item.resolved=true;

                return item;
            })
            return updateState;


    }
    else
    {
        return state;

    }


}
import { createStore } from "redux";

const store=createStore(reducer);

console.log(store.getState())
store.dispatch({
    type:"bugAdded",
    payload:{
        description:"First Bug"
    }
})
store.dispatch({
    type:"bugAdded",
    payload:{
        description:"Secon Bug"
    }
})
store.dispatch({
    type:"bugResolved",
    payload:{
        id:1
    }
})
console.log(store.getState());
