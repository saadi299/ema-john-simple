import React, { useState, useEffect } from 'react';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import funnyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart,setCart]=useState([]);
    const [orderPlaced,setOrder]=useState(false);

    const handlePlaceOrder =() =>{
        //console.log("clicked");
        setCart([]);
        setOrder(true);
        processOrder();

    }

    let thankYou;
    if(orderPlaced) {thankYou=<img src={funnyImage} alt=""/>}
    

    const removeItem = (productKey) =>{
        const nerCart=cart.filter(product => product.key != productKey);
        setCart(nerCart);
        removeFromDatabaseCart(productKey)

    }

  

    useEffect(()=>{
        //cart
        const savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);

        const cartProducts=productKeys.map(key => {
            const product=fakeData.find(pd=>pd.key===key);
            //const a=savedCart[key];
            
            product.quantity=savedCart[key];
            //console.log(product);
            return product;
           
        });
        //console.log(savedCart);
        setCart(cartProducts);
    },[])
    return (
        
        
        <div className="twin-cotainer">

            <div className="product-container">
            <h1>Cart items:{cart.length}</h1>
            {thankYou}
            {
                cart.map(pd=><ReviewItem 
                    key={pd}
                    product={pd}
                    removeItem={removeItem}
                    ></ReviewItem>)
            }

            </div>
            <div className="cart-container">
                
                <Cart cart={cart}>
                <button className="cartButton" onClick={handlePlaceOrder}>Place Order</button>
                </Cart>

            </div>
            
        </div>
    );
};

export default Review;