import * as actionTypes from '../actions/actionTypes'
const initialState ={
    authorFilter:[],
    statusFilter:[]
 
}


const reducer = (state = initialState,action) => {
    console.log(action)
 switch(action.type){
     case actionTypes.ADD_AUTHOR_FILTER:
         return{
             ...state,
             ...action.authorFilter,
         }
         case actionTypes.ADD_STATUS_FILTER:
            return{
                ...state,
                ...action.statusFilter,
            }     
       
     default: return state   
 }
    
   
}


export default reducer;