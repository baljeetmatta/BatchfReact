//1 -- create a class extends React.Component
//2 render->return tsx
import React from 'react';
type GreetProps={
    name:string
}
class GreetClass extends React.Component<GreetProps>
{
     clickHandler=()=>{
        alert("clicked");

    }
    //props
    render()
    {
        return (
            <>
            Greet {this.props.name}
            <button onClick={this.clickHandler}>Click me</button>
            </>
        )
    }
}
export default GreetClass;
