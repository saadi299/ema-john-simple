import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, category, name, seller, price, stock } = props.product;

    return (

        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div >
                <h2>{category}</h2>
                <h4 className="product-name">{name}</h4>
                <p><small>by:{seller}</small></p>
                <h3><b>${price}</b></h3>
                <p><small>Only{stock} left in stock order soon</small></p>
                <button className="cartButton" 
                        onClick ={() => props.handleAddProdect(props.product)}>
                                <FontAwesomeIcon icon={faShoppingCart}/> add to cart
                </button>
            </div>

        </div>

    );
};

export default Product;