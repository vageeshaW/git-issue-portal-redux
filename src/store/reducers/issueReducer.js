import * as actionTypes from '../actions/actionTypes'
const initialState ={
    name: "",
    description: "",
    repository_id:"",
    author:"",
    status:""
 

}


const reducer = (state = initialState,action) => {
    console.log(action)
 switch(action.type){
     case actionTypes.GET_ISSUE_SUCCESS:
         return{
             ...state,
             ...action.issue,
         }
       
     default: return state   
 }
    
   
}


export default reducer;