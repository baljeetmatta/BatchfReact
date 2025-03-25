// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Jobs, { JobsData } from "./Jobs";
// import Navbar from "./components/Navbar";
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import JobDetails, { fetchJobDetails } from "./components/JobDetails";
// import Posts from "./components/Posts";
// //import jsondata from "./jobs.json"
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
//   {

import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./Login";
import { NavLink } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import LoginScreen from "./components/LoginScreen";
import { useState } from "react";
import { UserContext, UserType } from "./components/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import BugApp from "./components/BugApp";
import { PersistGate } from "redux-persist/lib/integration/react";

  
//     path:"/jobs",
//     element:<Jobs/>,
//     loader:JobsData
//   },
//   {
  
//     path:"/jobdetails/:id",
//     element:<JobDetails/>,
//     loader:fetchJobDetails
//   },
//   {
//     path:"/posts",
//     element:<Posts/>
//   }


// ])
// function App(){
//   return (
//     <>
   
//     <RouterProvider router={router}/>

//     </>
//   )
// }
// export default App;
// // // import testdata from './data.json';
// // // import Code,{Test} from './Greet'
// // // function App() {
// // // let data="value from script";
// // // let arrayData:string[]=["name1","name2"];
// // // let obj:{name:string,age:number}={
// // //   name:"Name",
// // //   age:30
// // // }
// // // type objectType={
// // //   name:string,
// // //   age:number
// // // }
// // // let objarray:objectType[]=testdata;

// // // // let objarray:objectType[]=[
// // // //   {
// // // //     name:"First",
// // // //     age:20
// // // //   },
// // // //   {
// // // //     name:"Second",
// // // //     age:30
// // // //   }
// // // // ]

// // //   // return (
// // //   //  <>
// // //   //     <div >
// // //   //       Welcome to React {data} {obj.name}
// // //   //     </div>
// // //   //     {
// // //   //       arrayData.map((item)=>{
// // //   //         return <p>{item}</p>
// // //   //       })
// // //   //     }
// // //   //     {
// // //   //       objarray.map((item)=>{
// // //   //        return  <p>{item.name} - {item.age}</p>
// // //   //       })
// // //   //     }

      
// // //   //   </>
// // //   // )
// // //   return (
// // //     <>
// // //     <div>App Component</div>
// // //     <Test/>

// // //     </>
// // //   )
// // // }
// // //import './App.css'
// // import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
// // import Banner from './Banner';
// // import GreetClass from './GreetClass'
// // import Login from './Login';
// // import Parent from './Parent';
// // import Text from "./Text"
// // import Home from './components/Home';
// // import About from './components/About';
// // import Contact from './components/Contact';
// // import Navbar from './components/Navbar';
// // const router=createBrowserRouter([
// //   {
// //     path:"/",
// //     element:<Home/>

// //   },
// //   {
// //     path:"/about",
// //     element:<About/>

// //   },
// //   {
// //     path:"/contact",
// //     element:<Contact/>

// //   }

// // ])
// // function App()
// // {
// //   return (
// //     <>
// //     {/* <GreetClass name="Code"/> */}
// //     {/* <Login/> */}
// //     {/* <Banner/> */}
// //     {/* <Text/> */}
// //     {/* <Parent/>
// // <Routes>
// //     <Route path="/" element={<div>Home Page</div>}></Route>
// //     <Route path="/text" element={<Text/>}/>

// // </Routes> */}
// // <Navbar/>

// // <RouterProvider router={router}/>

// // {/* 
// // <Routes>
// // <Route path="/" index element={<Home/>}/>
// // <Route path="/about" element={<About/>}/>
// // <Route path="/contact" element={<Contact/>}/>
// // <Route path="/login" element={<Login/>}/>
// // <Route path="/greet/:id" element={<Text/>}/>


// //   </Routes> */}


// //     </>
// //   )
// // }
// // export default App;
// // // import Greeting from './Greeting'
// // // import Inner from './Inner'
// // // import jsondata from './data.json'

// // // function App()
// // // {
// // //   return (
// // //     <>
// // //     <div>App Component</div>
// // //     <Greeting name="Chitkara" years={10} data={jsondata[0]}/>
// // //     <Greeting name="CodeQuotient">
// // //         <Inner/>
        
// // //       </Greeting>

   
// // //        </>
// // //   )
// // // }
// // // export default App
import { pstore } from "./components/BugStore";
function App()
{
  const [name,setName]=useState<string|null>(null);


    return (
      <>
      Username :{name}
      <PersistGate persistor={pstore}>
      <UserContext.Provider value={{name,setName}}>

     
    
      <ul className="flex gap-2">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/login" >Login</NavLink></li>
      
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/bugs">Bugs</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/bugs" element={<BugApp/>}/>
        <Route path="/" element={<PrivateRoute><Outlet/></PrivateRoute>} >
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
       

        </Route>
      </Routes>
      </UserContext.Provider>
      </PersistGate>
      </>
    )



}
export default App;