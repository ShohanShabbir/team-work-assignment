import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/cartAction";

const initialState ={
    cart: [],
    products: [
    {name: 'T-Shirt 1', price: '$56', tex: '10%', id: 1},
    {name: 'T-Shirt 2', price: '$56', tex: '10%', id: 2},
    {name: 'T-Shirt 3', price: '$71', tex: '10%', id: 3},
    {name: 'T-Shirt 4', price: '$89', tex: '10%', id: 4},
    {name: 'T-Shirt 5', price: '$32', tex: '10%', id: 5},
    {name: 'T-Shirt 6', price: '$122', tex: '10%', id: 6}]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const newID = action.id;
            const newCart = [...state.cart, newID];
            return {products: state.products, cart: newCart};
            case REMOVE_FROM_CART:
                const id = action.id;
                const remainingCart = state.cart.filter(item => item !== id);
                return {cart: remainingCart}
        default: 
            return state; 
    }
}

export default cartReducers;