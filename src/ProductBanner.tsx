
type ProductBannerProps={
    line1:string
    image:string
}
const ProductBanner=(props:ProductBannerProps)=>{

    return (
        <>
          <div className="flex bg-red-200 p-4">
                            {/* Content */}
                            <div>
                                    <div>{props.line1}</div>
                                    <div>Free Shipping</div>
                                    <div>Attractive Natural Furniture</div>
                                    <div><button>Shop Now</button></div>
                            </div>
                            {/* Image */}
                            <div>
                                <img src={props.image} className="w-48"/>


                            </div>
                        </div>
        </>
    )
}
export default ProductBanner;
