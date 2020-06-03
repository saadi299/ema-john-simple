import React from 'react';

const ReviewItem = (props) => {
    //console.log(props);
    const {name,category,quantity,key,price}=props.product;

    const reviewItemStyle={
        borderBottom:'1px solid grey',
        paddingBottom:'20px',
        marginLeft:'100px'

    };
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>     
            <p>Quantity: {quantity}</p> 
          <p><small>Price:{price}</small></p>
            <button className="cartButton" onClick={() => props.removeItem(key)}>remove</button>
        </div>
    );
};

export default ReviewItem;