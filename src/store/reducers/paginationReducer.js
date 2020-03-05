import * as actionTypes from '../actions/actionTypes'
const initialState ={
     pageSize:4,
     total:"",
     pageNo:1,

}


const reducer = (state = initialState,action) => {
    console.log(state,action)
 switch(action.type){
     case actionTypes.FILTER_ISSUES_SUCCESS:
         return{
             ...state,
             paginationData:action.paginationData,
         }
        
       
     default: return state   
 }
    
   
}


export default reducer;