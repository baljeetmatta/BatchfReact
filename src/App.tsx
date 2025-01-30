import './App.css'
import testdata from './data.json';
import Code,{Test} from './Greet'
function App() {
let data="value from script";
let arrayData:string[]=["name1","name2"];
let obj:{name:string,age:number}={
  name:"Name",
  age:30
}
type objectType={
  name:string,
  age:number
}
let objarray:objectType[]=testdata;

// let objarray:objectType[]=[
//   {
//     name:"First",
//     age:20
//   },
//   {
//     name:"Second",
//     age:30
//   }
// ]

  // return (
  //  <>
  //     <div >
  //       Welcome to React {data} {obj.name}
  //     </div>
  //     {
  //       arrayData.map((item)=>{
  //         return <p>{item}</p>
  //       })
  //     }
  //     {
  //       objarray.map((item)=>{
  //        return  <p>{item.name} - {item.age}</p>
  //       })
  //     }

      
  //   </>
  // )
  return (
    <>
    <div>App Component</div>
    <Test/>

    </>
  )
}

export default App
