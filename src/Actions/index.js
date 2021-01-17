import * as Types from './../Constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }

}