
// import testdata from './data.json';
// import Code,{Test} from './Greet'
// function App() {
// let data="value from script";
// let arrayData:string[]=["name1","name2"];
// let obj:{name:string,age:number}={
//   name:"Name",
//   age:30
// }
// type objectType={
//   name:string,
//   age:number
// }
// let objarray:objectType[]=testdata;

// // let objarray:objectType[]=[
// //   {
// //     name:"First",
// //     age:20
// //   },
// //   {
// //     name:"Second",
// //     age:30
// //   }
// // ]

//   // return (
//   //  <>
//   //     <div >
//   //       Welcome to React {data} {obj.name}
//   //     </div>
//   //     {
//   //       arrayData.map((item)=>{
//   //         return <p>{item}</p>
//   //       })
//   //     }
//   //     {
//   //       objarray.map((item)=>{
//   //        return  <p>{item.name} - {item.age}</p>
//   //       })
//   //     }

      
//   //   </>
//   // )
//   return (
//     <>
//     <div>App Component</div>
//     <Test/>

//     </>
//   )
// }
import './App.css'
import GreetClass from './GreetClass'
import Login from './Login';
function App()
{
  return (
    <>
    {/* <GreetClass name="Code"/> */}
    <Login/>
    

    </>
  )
}
export default App;
// import Greeting from './Greeting'
// import Inner from './Inner'
// import jsondata from './data.json'

// function App()
// {
//   return (
//     <>
//     <div>App Component</div>
//     <Greeting name="Chitkara" years={10} data={jsondata[0]}/>
//     <Greeting name="CodeQuotient">
//         <Inner/>
        
//       </Greeting>

   
//        </>
//   )
// }
// export default App
