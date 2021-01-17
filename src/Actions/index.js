import * as Types from './../Constants/ActionType';

export const actAddToCard = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }

}