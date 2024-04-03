import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            const itemId=action.payload.card.info.id;
            state.items=state.items.filter((i)=>i.card.info.id!=itemId);
        },
        removeCart:(state,action)=>{
            state.items.length=0
        }

    }
});

export const {addItem,removeItem,removeCart}=cartSlice.actions;

export default cartSlice.reducer;