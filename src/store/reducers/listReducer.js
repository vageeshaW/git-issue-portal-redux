import * as actionTypes from '../actions/actionTypes'
const initialState ={
 issues:[],

}


const reducer = (state= initialState,action) => {

 switch(action.type){
     case actionTypes.GET_ISSUES_SUCCESS:
         return{
             ...state,
             issues:action.issues
         }
     default: return state   
 }
    
   
}


export default reducer;