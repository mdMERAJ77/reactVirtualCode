import { useState } from 'react';
import { category } from '../../Category';
import { dummydata } from '../../dummydata';
import Product from '../../components/Product/Product';
import { FaShopify } from "react-icons/fa";

import './Shop.css'
function Shop() {
    let[cate,setCate]=useState(dummydata)
      function filterProducts(category){
        if(category=="All"){
            setCate(dummydata)
        }
        else{
            const updatedata= dummydata.filter((item)=>
         (item.category==category))
         setCate(updatedata)
        }
      }
  return (
    <div className="shop">
        <div className='heading'>
            <span>Shop</span>
            <FaShopify/>
        </div>
        <div className="category-section">
                {category.map((item, key) => (
                  <div onClick={()=>{filterProducts(item.name)}} className="category-card" key={key}>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
              <div className="product-section">
                      {cate.map((item,key)=>{
                        return <Product key={key} name={item.name} image={item.image} price={item.price} id={item.id}/>
                      })}
                    </div>
    </div>
  )
}

export default Shop