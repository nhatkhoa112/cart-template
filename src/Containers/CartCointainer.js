import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../Components/Cart';
import CartResult from './../Components/CardResult';
import CartItem from './../Components/CartItem';
import * as Message from './../Constants/Message';
import {actChangeMessage, actDeleteProductInCart, actUpdateProductInCart} from './../Actions/index';


class CartContainer extends Component {
    state = {  }
    render() { 
        var { cart } = this.props;
        var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
        return ( 
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
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
                                onDeleteProductInCart={this.props.onDeleteProductInCart} 
                                onChangeMessage ={this.props.onChangeMessage}
                                onUpdateProductInCart={this.props.onUpdateProductInCart}

                                    />
            });
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length>0){
            result = <CartResult cart={cart}/>
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
    })).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired

}
const mapStateToProps  = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) =>{
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) =>{
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);