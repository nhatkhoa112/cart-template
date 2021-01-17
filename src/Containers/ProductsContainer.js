import React, { Component } from 'react';
import { connect } from 'react-redux'
import Products from './../Components/Products'
import Product from './../Components/Product'
import PropTypes from 'prop-types';
import { actAddToCart } from './../Actions/index';




class ProductsContainer extends Component {
    state = {  }
    render() { 
        var { products } = this.props;
        return ( 
            <Products>
                {this.showProducts(products)}
            </Products>
         );
    }
    showProducts(products){
        var result = null;
        var {onAddToCart}= this.props;
        if(products.length > 0){
            result = products.map((product, index) =>{
                return <Product key={index}
                                product = {product} 
                                onAddToCart={onAddToCart}
                                    />
            });
        }
        return result;
    }
    
}

ProductsContainer.propTypes={
    product: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            descriptiop: PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }

}

const mapDispatchToProps = (dispatch , props) => {
    return{
        onAddToCart: (product) => {
            dispatch(actAddToCart(product,1))

        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps, null)(ProductsContainer);