import * as actionTypes from './actionTypes'

export const getPaginationDataSuccess = ( obj ) => {
    return {
        type: actionTypes.GET_PAGINATION_SUCCESS,
        paginationData:obj
    };
};

export const filterIssueFail = ( error ) => {
    return {
        type: actionTypes.FILTER_ISSUES_FAIL,
        error: error
    };
};


export const getDataWithPagination = (pageNo,total,pageSize) => { 
    let obj={
        pageNo,
        total,
        pageSize
      }
    return dispatch  => {
       
        dispatch(getPaginationDataSuccess(obj));
    };
};