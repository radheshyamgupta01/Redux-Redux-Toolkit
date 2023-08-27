import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
    counter: 0,
    showCounter: true,
}
const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter-- 
          
        } ,
IncrementBy5(state,action){

state.counter=state.counter+action.payload
}
,
DecrementBy5(state,action){

    state.counter=state.counter-action.payload

}
,
toggleCounter(state){
    state.showCounter=!state.showCounter
}
    }
})
const initialStateUser={
    isAuthenticated:false
}
const authReducer=createSlice({
    name:"auth",
    initialState:initialStateUser,
    reducers:{
        logIn(state){
            state.isAuthenticated=true
        },
        logOut(state){
            state.isAuthenticated=false
        }
    }

})

const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        auth:authReducer.reducer
    } 
})
export const counterActions = counterSlice.actions
export const authActions=authReducer.actions
export default store;