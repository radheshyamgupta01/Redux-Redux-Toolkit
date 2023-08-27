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
        },
        decrementby5(state, action) {
           state.counter= state.counter - action.payload
        },
        incrementby5(state, action) {
          state.counter=  state.counter + action.payload
        },
        Toggle(state) {
            
            state.showCounter= !state.showCounter
        }

    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})
export const counterActions = counterSlice.actions
export default store;