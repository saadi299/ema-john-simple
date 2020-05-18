import React, { useState } from 'react';
import fakedata from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';

const Shop = () => {
   
    const first10=fakedata.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);
    const handleAddProdect = (product) =>
     {
         //console.log("product added",product)
         const newState=[...cart,product];
         setCart(newState);
      
     };
  

    
    return (
        <div className="shop-cotainer">
                <div className="product-container">
                        {
                            products.map(pd => <Product
                                 product={pd}
                                 handleAddProdect={handleAddProdect}
                               ></Product>)
                        }    


                       
                 </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
           

           
        </div>
    );
};

export default Shop;