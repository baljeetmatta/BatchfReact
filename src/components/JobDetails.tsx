import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { jsonType } from "../Jobs";
const JobDetails=()=>{
        const data=useLoaderData<jsonType>();

    return (
        <>
        <div>
            <div>{data.title}</div>
            <div>{data.description}</div>
            <div>{data.package}</div>
        </div>
        </>
    )

}
export default JobDetails;
export const fetchJobDetails=async({params}:LoaderFunctionArgs)=>{
//x object -> params ->id
const id=Number(params.id);

    const data = await fetch("/jobs.json") //return structured data
    const response:jsonType[]=await data.json();
    const filteredData=response.filter((item)=>{
        if(item.id==id)
            return true;
    })
    return filteredData[0];
}