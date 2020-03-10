import * as actionTypes from './actionTypes'
import DataArray from '../dataArray'

let data = DataArray;


export const getIssuesSuccess = ( issues ) => {
   
    return {
        type: actionTypes.GET_ISSUES_SUCCESS,
        issues:issues
    };
};

export const getIssuesFail = ( error ) => {
    return {
        type: actionTypes.GET_ISSUES_FAIL,
        error: error
    };
};

export const setTotal = ( total ) => {
    return {
        type: actionTypes.SET_TOTAL,
        total
    };
};

export const getIssues = () => {
    return dispatch  => {
                
                dispatch(getIssuesSuccess(data));
                dispatch(setTotal(data.length));
    };
};
