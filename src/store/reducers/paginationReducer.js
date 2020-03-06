import * as actionTypes from '../actions/actionTypes'
const initialState ={
    pageNo: 2,
    total: '',
    pageSize: 4

}


const reducer = (state = initialState,action) => {
    console.log(state,action)
 switch(action.type){
     case actionTypes.GET_PAGINATION_SUCCESS:
         return{
             ...state,
            ...action.paginationData,
         }
        
       
     default: return state   
 }
    
   
}


export default reducer;