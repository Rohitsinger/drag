import { createContext, useReducer } from "react";

export const ShopContext = createContext();

export const CartContext =({children})=>{

    const cartReducer =(state,action)=>{
       switch (action.type) {
        case 'ADD':
        const tempState = state.filter((item)=>action.payload.id===item.id)
        if(tempState.length > 0) {
            return state;
        }else{
            return [...state, action.payload]
        }
        case 'INCREASE':
            const tempState1 = state.map((item)=>
            {if(action.payload.id===item.id){
              return  {...item, quantity:item.quantity+1}

            }else{
                return item
            }
            
        }
            )
            return tempState1;
            case 'DECREASE':
            const tempState2 = state.map((item)=>
            {if(action.payload.id===item.id){
              return  {...item, quantity:item.quantity-1}

            }else{
                return item
            }
            
        }
            )
            return tempState2;
            case 'REMOVE':
            const tempState3 = state.filter((item)=>
            (action.payload.id!==item.id)
               

            
            )
            return tempState3;
         default:
            return state;
       }
    }

const [state,dispatch] = useReducer(cartReducer,[])
const info = {state,dispatch} 
   return <ShopContext.Provider value={info}>{children}</ShopContext.Provider>
}