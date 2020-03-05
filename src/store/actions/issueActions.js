import * as actionTypes from './actionTypes'

let dataArray = [

  {
    "id":'001',
    "name":'I have a issue with this reacr redux react all of - A',
    "repositary_id": '#1234',
    "author": 'Alfrad Beew',
    "status":'active',
    "description": 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
  },
  {
      "id":'002',
      "name":'I have a issue with this - r',
      "repositary_id": '#1234',
      "author": 'Alfrad Beew',
      "status":'closed',
      "description": 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
    },
    {
      "id":'003',
      "name":'I have a issue with this - ttt',
      "repositary_id": '#1234',
      "author": 'Alfrad Beew',
      "status":'active',
      "description": 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
    },
    {
      "id":'004',
      "name":'I have a issue with this reacr redux react all of - tttt',
      "repositary_id": '#1234',
      "author": 'Alfrad Beew',
      "status":'active',
      "description": 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
    },
    {
        "id":'005',
        "name":'I have a issue with this - hhhh',
        "repositary_id": '#1234',
        "author": 'Alfrad Beew',
        "status":'closed',
        "description": 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
      },
      {
        "id":'006',
        "name":'I have a issue with this - iiii',
        "repositary_id": '#1234',
        "author": 'Alfrad Beew',
        "status":'active',
        "description": 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
      },
      {
        "id":'007',
        "name":'I have a issue with this - oooo',
        "repositary_id": '#1234',
        "author": 'Alfrad Beew',
        "status":'closed',
        "description": 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
      },
      {
        "id":'008',
        "name":'I have a issue with this - lll',
        "repositary_id": '#1234',
        "author": 'Alfrad Beew',
        "status":'active',
        "description": 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
      },
      {
        "id":'009',
        "name":'I have a issue with this - kkkk',
        "repositary_id": '#1234',
        "author": 'Alfrad Beew',
        "status":'active',
        "description": 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
      },
      

]


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