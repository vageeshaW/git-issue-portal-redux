import * as actionTypes from './actionTypes'
import DataArray from '../dataArray'

let dataArray = DataArray;



export const getIssueSuccess = ( issue ) => {
    return {
        type: actionTypes.GET_ISSUE_SUCCESS,
        issue:issue
    };
};

export const getIssueFail = ( error ) => {
    return {
        type: actionTypes.GET_ISSUE_FAIL,
        error: error
    };
};


export const getIssue = (id) => {
    return dispatch  => {

       let data = dataArray.filter(x => x.id === id)

         dispatch(getIssueSuccess(data[0]));
        // console.log(data)
              //  dispatch(getCatsFail(err));
    };
};