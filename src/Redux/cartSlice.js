import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartList:[],
        totalQuantity:0
    },
    reducers:{
        //addToCart
        addToCart:(state,action)=>{
            const existedItem = state.cartList.find((e)=> e.id === action.payload.id)
            if(existedItem){
                existedItem.quantity++;
            } else{
                state.cartList.push({...action.payload,quantity:1,totalPrice:action.payload.price})
                state.totalQuantity++;
            }
            
        },
        //increaseItem
        increaseItem:(state,action)=>{
            const existedItem = state.cartList.find((e)=> e.id === action.payload.id)
        
            if(existedItem){
                existedItem.quantity++;
            } else{
                state.cartList.push({...action.payload,quantity:1,totalPrice:action.payload.price})
                state.totalQuantity++;
            }
       
            
        // item.price += item.price
        existedItem.totalPrice = existedItem.price * existedItem.quantity
   
        },
        //decreaseItem
        decreaseItem:(state,action)=>{
            const item =  state.cartList.find((E) => E.id === action.payload.id)
         
            if(item.quantity === 1){
                item.quantity = 1
            }else{
            item.quantity--;
            item.totalPrice -= item.price
    
            }

    
        },
        //removeItem
        removeItem:(state,action)=>{
            const remainedItems =  state.cartList.filter((e)=> e.id !== action.payload.id)
            state.cartList = remainedItems
            
            state.totalQuantity = remainedItems.length
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const {addToCart,increaseItem,decreaseItem,removeItem}  =  cartSlice.actions;
//cart example
        /* 
        cartList:[
            {
                id:1,
                image:"dummy.png",
                title:"banana",
                price:"120",
                quantity:"2",
            },
            {
                id:1,
                image:"dummy.png",
                title:"banana",
                price:"120",
                quantity:"2",
            },
            {
                id:1,
                image:"dummy.png",
                title:"banana",
                price:"120",
                quantity:"2",
            }
        ]
        */