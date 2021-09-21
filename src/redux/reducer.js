import {ADD_TO_CART, REMOVE_FROM_CART, ADD_ITEM_QTY, SUBTRACT_ITEM_QTY, SELECTED_ITEMS} from "./actionTypes";

const initialState = {
    items: [],
    total: 0
}

const cartItems = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // checking item existence in the cart
            const inCart = state.items.some(item => item.id === action.payload.id);
            // grand total calculation
            const cartTotalAmount = state.items.reduce(
                (totalAmount, { itemPrice, itemQty }) => totalAmount + itemPrice * itemQty,
                0,
              );
              
            if (inCart) {
                // already in cart, shallow copy cart items
                if(action.payload.itemChecked === 1){
                  return {
                    ...state,
                    items: state.items.map(item => item.id === action.payload.id ? {
                      // found item, shallow copy item and update quantity property
                      ...item,
                      itemQty: item.itemQty + 1,
                    } : item),
                    total: state.total + action.payload.itemPrice 
                  }
                }else{
                  return {
                    ...state,
                    items: state.items.map(item => item.id === action.payload.id ? {
                      // found item, shallow copy item and update quantity property
                      ...item,
                      itemQty: item.itemQty + 1,
                    } : item),
                    total: cartTotalAmount + action.payload.itemPrice 
                  }
                }

              } else {
                    return {
                        ...state,
                        items: [...state.items, action.payload],
                    }
              }

        case REMOVE_FROM_CART:
            return {
                ...state,
                total: state.total - action.payload.itemPrice * action.payload.itemQty,
                items: state.items.filter(item => item.id !== action.payload.id),
            }

        case ADD_ITEM_QTY:
          if(action.payload.itemChecked === 1){
            return {
              ...state,
              items: state.items.map(item => item.id === action.payload.id ? {
                // found item, shallow copy item and update quantity property
                ...item,
                itemQty: item.itemQty + 1,
              } : item),
             total: state.total + action.payload.itemPrice 
            }
          }else{
            return {
              ...state,
              items: state.items.map(item => item.id === action.payload.id ? {
                // found item, shallow copy item and update quantity property
                ...item,
                itemQty: item.itemQty + 1,
              } : item),
            }
          }

        case SUBTRACT_ITEM_QTY:
          if(action.payload.itemChecked === 1){
            return {
              ...state,
              items: state.items.map(item => item.id === action.payload.id ? {
                // found item, shallow copy item and update quantity property
                ...item,
                itemQty: item.itemQty - 1,
              } : item),
             total: state.total - action.payload.itemPrice 
            }
          }else{
            return {
              ...state,
              items: state.items.map(item => item.id === action.payload.id ? {
                // found item, shallow copy item and update quantity property
                ...item,
                itemQty: item.itemQty - 1,
              } : item),
            }
          }

        case SELECTED_ITEMS:
              if(action.payload.itemChecked === 1){
                return{
                  ...state,
                  items: state.items.map(item => item.id === action.payload.id ? {
                    // found item, shallow copy item and update quantity property
                    ...item,
                    itemChecked: item.itemChecked === 1 ? 0:1
                  } : item),
                  total: state.total - action.payload.itemPrice * action.payload.itemQty
                }
                
              }else{
                return {
                  ...state,
                  items: state.items.map(item => item.id === action.payload.id ? {
                    // found item, shallow copy item and update quantity property
                    ...item,
                    itemChecked: item.itemChecked === 0 ? 1:0
                  } : item),
                  total: state.total + action.payload.itemPrice * action.payload.itemQty
                } 
              }        
        default:
            return state
    }
}

export default cartItems;