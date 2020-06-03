import React, { useState, useEffect } from 'react';
import fakedata from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Shop = () => {
   
    const first10=fakedata.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);

    useEffect(() =>{
        const savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);
       // console.log(productKeys);

            const previousCart=productKeys.map(existingKeys=>{
            const product=fakedata.find(pd=>pd.key===existingKeys);
            product.quantity=savedCart[existingKeys];
            return product;
       })
       setCart(previousCart);

    },[])

    const handleAddProdect = (product) =>
     {
         //console.log("clicked");
         const toBeAddedKey=product.key;
         const sameProduct=cart.find(pd=>pd.key===toBeAddedKey);
         console.log(toBeAddedKey);

         let newCart;
         let count=1;

         if(sameProduct)
         {
             count=sameProduct.quantity+1;
             sameProduct.quantity=count;
             const others=cart.filter(pd=> pd.key!==toBeAddedKey);
             newCart=[...others,sameProduct];
             
         }
         else{
             product.quantity=1;
             newCart=[...cart,product];
         }
         //console.log(toBeAddedKey);
         setCart(newCart);
         addToDatabaseCart(product.key,count);
         
        
      
     };
  

    
    return (
        <div className="twin-cotainer">
                <div className="product-container">
                        {
                            products.map(pd => <Product 
                                key={pd.key}
                                showAddToCart={true}
                                 product={pd}
                                 handleAddProdect={handleAddProdect}
                               ></Product>)
                        }    


                       
                 </div>

            <div className="cart-container">
                <Cart cart={cart} >
                    {
                         <Link to="/review"> <button className="cartButton">Review</button> </Link>
                    }

                    
                </Cart>

            </div>
           

           
        </div>
    );
};

export default Shop;