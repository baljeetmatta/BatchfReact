import { useEffect, useRef, useState } from "react";

type PostType={
    id:number,
    title:string,
    body:string
}
const Posts=()=>{
    const [posts,setPost]=useState<PostType[]|undefined>(undefined);
    const [isLoading,setLoading]=useState(true);
    const [error,setError]=useState<string|undefined>(undefined)
    const [page,setPage]=useState(0);
    const abortRef=useRef<AbortController|undefined>(undefined);

    useEffect(()=>{

        setLoading(true);
        abortRef.current?.abort();
        abortRef.current=new AbortController();




        fetch("https://jsonplaceholder.typicode.com/posts?page="+page,{
            signal:abortRef.current?.signal
        })
        .then((response)=>{
            return response.json();
        }).then((response)=>{
            setLoading(false);
            setPost(response);
        }).catch((e)=>{
            console.log(e);

            //setError("Error in handling request");
        })
        //once
    },[page])
if(error)
    return <div>Error in loading data...</div>

    // if(isLoading)
    //     return <div>Loading...</div>;


return (
    <>
    <button onClick={()=>{setPage(page+1)}}>Next Page -{page}</button>
    {isLoading && <div>Loading...</div>}
    {!isLoading &&
    <table>
        {
            posts?.map((item)=>{
                return (
                    <tr><td>{item.title}</td><td>{item.body}</td> </tr>
                )
            })
        }

    </table>
}
    </>
)

}
export default Posts;