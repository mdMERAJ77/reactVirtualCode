
import "./Product.css"
function Product({id,name,price,image}) {
  return (
    <div className='product'>
        <img src={image} alt="" />
        <div className="product-details">
            <span>{name}</span>
            <span>Rs: {price}</span>
            <button>Add +</button>
        </div>
    </div>
  )
}

export default Product