import * as actionTypes from '../actions/actionTypes'
const initialState ={
    type:"",
    value:""
}


const reducer = (state = initialState,action) => {
    console.log(state)
 switch(action.type){
     case actionTypes.FILTER_ISSUES_SUCCESS:
         return{
             ...state,
             ...action.filterFeilds,
            
         }
        
       
     default: return state   
 }
    
   
}


export default reducer;