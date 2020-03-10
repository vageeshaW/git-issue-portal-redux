import * as actionTypes from './actionTypes'

export const filterIssuesSuccess = ( obj ) => {
    return {
        type: actionTypes.FILTER_ISSUES_SUCCESS,
        filterFeilds:obj
    };
};

export const updateFilterdIssues = ( issueList ) => {
    return {
        type: actionTypes.FILTER_ISSUES,
        issueList
    };
};

export const filterIssueFail = ( error ) => {
    return {
        type: actionTypes.FILTER_ISSUES_FAIL,
        error: error
    };
};
export const setTotal = ( total ) => {
    return {
        type: actionTypes.SET_TOTAL,
        total
    };
};


export const filterIssues = (type,value) => {
    let obj={
      type,
      value
    }
    let newIssues=[];
    
    return (dispatch,getState)  => {
       const {issueList:{issues}}=getState();
       if (
        obj.type &&
        obj.value &&
        obj.type != "" &&
        obj.value != ""
      ) {
        let type = obj.type;
        let value = obj.value;
         newIssues = issues.filter(x => x[type] === value);
      } else {
        newIssues = issues;
      }
        dispatch(filterIssuesSuccess(obj));
        dispatch(updateFilterdIssues(newIssues));
        dispatch(setTotal(newIssues.length));
       
    };
};