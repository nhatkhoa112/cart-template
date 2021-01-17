import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../Components/Cart';
import CartItem from './../Components/CartItem';

import * as Message from './../Constants/message'



class CartContainer extends Component {
    state = {  }
    render() { 
        var { cart } = this.props
        return ( 
            <Cart>
                {this.showCartItem(cart)}
            </Cart>
         );
    }
    showCartItem =(cart) => {
        var result = Message.MSG_CART_EMPTY;
        if(cart.length > 0){
            result = cart.map((item, index) =>{
                return <CartItem key={index}
                                item = {item}
                                index = {index} 
                                    />
            });
        }
        return result;
    }
    
}



CartContainer.protoTypes={
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            descriptiop: PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired, 
        quantity:PropTypes.number.isRequired
    })).isRequired
}
const mapStateToProps  = state => {
    return {
        cart: state.cart
    }
}


export default connect(mapStateToProps, null)(CartContainer);