import * as Types from './../Constants/ActionType'
var data = JSON.parse(localStorage.getItem('CART'))
var initialState = [  {
    product: { 
        id:1,
        name: 'Iphone 7 Plus',
        image: 'data:image/jpeg;base64,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' , 
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 20,
        rating: 4
    }, quantity: 5
},{
    product: { 
        id:2,
        name: 'Samsung galaxy s7',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoI_HlEXj3S-S77CuwfA-dyGaPgtncIp3Q-U79wHLTzO-Dr-EWvBLsiih_IQnWlSq_2bIjEhE&usqp=CAc',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 3
    }, quantity: 5
    }
    
];

const cart = (state=initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch(action.type){
        case Types.ADD_TO_CART:
           index = findProductInCart(state, product);
           if(index !== -1){
               state[index].quantity += quantity
           }else{
               state.push({
                   product,
                   quantity
               });
           }
            return [...state];
        default: return [...state];
    }   
}

var findProductInCart = (cart, product) => {   
    var index=-1;
    if(cart.length>0){
        for(var i=0;i< cart.length;i++){
            if(cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;