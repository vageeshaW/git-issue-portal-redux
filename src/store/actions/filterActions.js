import * as actionTypes from './actionTypes'

export const filterIssuesSuccess = ( obj ) => {
    return {
        type: actionTypes.FILTER_ISSUES_SUCCESS,
        filterFeilds:obj
    };
};

export const updateFilterdIssues = ( obj ) => {
    return {
        type: actionTypes.FILTER_ISSUES,
        filterFeilds:obj
    };
};

export const filterIssueFail = ( error ) => {
    return {
        type: actionTypes.FILTER_ISSUES_FAIL,
        error: error
    };
};


export const filterIssues = (type,value) => {
    let obj={
      type,
      value
    }
    
    return dispatch  => {
       
        dispatch(filterIssuesSuccess(obj));
        dispatch(updateFilterdIssues(obj))
    };
};