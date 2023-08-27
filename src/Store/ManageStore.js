import {createStore} from "redux"
 const initialState={
    counter:0,
    showCounter:true
    
 }
const counterReducer = (state = initialState, action) => {
   
    if(action.type==="increment"){
    
            return{
                counter:state.counter+1,
                showCounter:state.showCounter
            }
        }
   


    
    if(action.type==="decrement"){
     if(state.counter<=0){
        return state
     }
     else{
        return{
            counter:state.counter -1,
            showCounter:state.showCounter
            
        }

     }
           
        

      
    }
    if(action.type=="incrementby5"){
        
            return{
                counter:state.counter+action.amount,
                showCounter:state.showCounter
            }
        }
      
    
    if(action.type=="decrementby5"){
        
        if(state.counter<=0){
            return state
        }
        else{
            return{
                counter:state.counter-action.amount,
                showCounter:state.showCounter
            }
        
        }
           
       
        }
   
    
    
        if (action.type === "toggle") {
            return {
              ...state,
              showCounter:!state.showCounter
            };
          }
    
 
 return state
};
 const store=createStore(counterReducer)
 export default store;