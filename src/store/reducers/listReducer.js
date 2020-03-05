import * as actionTypes from '../actions/actionTypes'
const initialState ={
 issues:[],
 filterdIssues:[]

}

const filterIssues=(state,obj)=>{
    let issues = [];
    if (
      obj.type &&
      obj.value &&
      obj.type != "" &&
      obj.value != ""
    ) {
      let type = obj.type;
      let value = obj.value;
      issues = state.issues.filter(x => x[type] === value);
      return({
        ...state,
        filterdIssues:issues
              
    })
    } else {
      issues = state.issues;
      return ({
        ...state,
        filterdIssues:issues
              
    })
    }
 
}


const reducer = (state= initialState,action) => {

 switch(action.type){
     case actionTypes.GET_ISSUES_SUCCESS:
         return{
             ...state,
             issues:action.issues,
             filterdIssues:action.issues
            
         }

         case actionTypes.FILTER_ISSUES:
            return filterIssues(state,action.filterFeilds)
                
     default: return state   
 }
    
   
}


export default reducer;