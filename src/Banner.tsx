import ProductBanner from "./ProductBanner";
import sofa1 from "./assets/sofa-1.png";
import sofa2 from "./assets/sofa-2.png";
const Banner=()=>{
    return(
        <>
        {/* Container */}
            <div className="container">
                {/* Grid */}
                <div className="grid grid-cols-2 gap-4">
                        {/* COls 1 */}
                      
                     <ProductBanner line1="30% Offer" image={sofa1}/>

                        {/* COls 2 */}
                      
                        <ProductBanner line1="50% offer" image={sofa2}/>



                </div>
            </div>
        </>
    )
}
export default Banner;
