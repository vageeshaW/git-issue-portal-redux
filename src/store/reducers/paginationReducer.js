import * as actionTypes from '../actions/actionTypes'
const initialState ={
    pageNo: 1,
    total: '',
    pageSize: 4

}


const reducer = (state = initialState,action) => {
  
 switch(action.type){
     case actionTypes.GET_PAGINATION_SUCCESS:
         return{
             ...state,
            ...action.paginationData,
         }
         case actionTypes.SET_TOTAL:
            return{
                ...state,
               total:action.total,
            }
           
       
     default: return state   
 }
    
   
}


export default reducer;