import { useLoaderData, useLocation } from "react-router-dom";
type jsonType = {
    id: number,
    title: string,
    description: string,
    package: string
}
const Jobs = () => {
    const data = useLoaderData<jsonType[]>();


    return (
        <>
            <div className="container">
                <div className="grid grid-cols-3 gap-4">
                    {
                        data.map((item) => {

                            return (
                                <div  className=" bg-gray-200">
                                    <div>
                                        {item.title}
                                    </div>
                                    <div>
                                        {item.description}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}
export default Jobs;
export const JobsData = async () => {
    //return "hi";
    //double promises
    // const data = await fetch("/jobs.json") //return structured data
    // const response = data.json();
    // return response;
    const data=await fetch("https://dummyjson.com/products");
    const response=await data.json();
    return response.products;

}