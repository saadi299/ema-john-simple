import React from 'react';
import Product from '../Product/Product';

import Review from '../Review/Review';

const Cart = (props) => {
    const Cart=props.cart;
    let total=0;
    for(let i=0;i<Cart.length;i++){
        const product=Cart[i];
        total=total+product.price*product.quantity;
        
        
    }

    const formatNumber =(num) => {
        const prcision=num.toFixed(2);
        return Number(prcision);

    }

    const producPrice= formatNumber(total);
    let shippingCost=0;
    if(producPrice<1){
        shippingCost=0;
    }
    else if(producPrice<500){
        shippingCost=40;
    }
    else{
        shippingCost=0;
    }

    let taxVat =formatNumber(producPrice/10);
 
    let totalPrice=formatNumber(producPrice+shippingCost+taxVat);
    


   
    
    
    
   // console.log(Cart);
    
  
    return (
        <div>
            <h4>Order Summary:</h4>
            <p>Items Ordered:{Cart.length}</p>
            <p>Product Price:{producPrice}</p>
            <p>Shipping Cost:{shippingCost}</p>
            <p>Tax+Vat:{taxVat}</p>
            <p>Total Price:{totalPrice}</p>
            {
                props.children
            }
            
            
           
            

    

        </div>
    );
};

export default Cart;