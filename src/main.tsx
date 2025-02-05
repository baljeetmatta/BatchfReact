import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.tsx'
//import Button from './Button.tsx'
import Controls from './Controls.tsx'
// const clickHandlerSend=(e:React.MouseEvent)=>{
//   let target=e.target as HTMLButtonElement;

//   alert("Clicked on "+target.innerText);
// }
// const clickHandlerClick=(e:React.MouseEvent)=>{
//   let target=e.target as HTMLButtonElement;
//   alert("Clicked on "+target.innerText);

// }
const clickHandler=(e:React.MouseEvent<HTMLButtonElement>)=>{
  let target=e.target as HTMLButtonElement;
  alert("Clicked on "+target.innerText);
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Button value="Send" click={clickHandler}/>
    <Button value="Click" click={clickHandler}/> */}
    
    <Controls/>
  </StrictMode>,
)
