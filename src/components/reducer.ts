import { IAction, IState, IBasketItem} from "./types";

export const reducer = (state:IState, action:IAction):IState => {
    switch(action.type) {

        
        case "products/add": {
            const productId = action.payload

            // Find if the product is already in the basket
            const existingProduct = state.basket.find(item => item.id === productId);

            if (existingProduct) {
                // If the product exists in the basket, increase its count
                return {
                    ...state,
                    basket: state.basket.map(item =>
                       {if(item.id = productId) {
                        return {...item, count: item.count + 1}
                       } else {
                        return item
                       }
                }),
                };
            } else {
                // Add the new product to the basket with a count of 1
                const newBasketItem: IBasketItem = {
                    id: productId,
                    count: 1,
                };

                return {
                    ...state,
                    basket: [...state.basket, newBasketItem], // Add new item to the basket
                };
            }
        }
        
                case "basket/add": {
                    const productId = action.payload
        
                    return {
                       ...state,
                       basket: state.basket
                       .map(item => {
                        if(item.id = productId) {
                            return {...item, count: item.count + 1}
                        } else {
                            return item
                        }
                       })
                    };
                }
        
                case "basket/decrease": {
                    const productId = action.payload
        
                    return {
                        ...state,
                        basket: state.basket
                            .map(item => {
                                if (item.id == productId && item.count > 1) {
                                    return { ...item, count: item.count - 1 }
                                } else {
                                    return item
                            }
                               
                      })
                    }
                
            }

            case "basket/remove": {
                const productId = action.payload
    

                return {
                    ...state,
                    basket: state.basket.filter(item => item.id !== productId),
                }
            }
    
        

        

        default:
        return state

    }

    
}