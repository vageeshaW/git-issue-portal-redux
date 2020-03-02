import * as actionTypes from './actionTypes'

let data = [

    {
      "id":'001',
      "name":'I have a issue with this reacr redux react all of - A',
      "repositary_id": '#1234',
      "author": 'Alfrad Beew',
      "staus":'active',
      "description": 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
    },
    {
        "id":'002',
        "name":'I have a issue with this - A',
        "repositary_id": '#1234',
        "author": 'Alfrad Beew',
        "staus":'active',
        "description": 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
      },
      {
        "id":'001',
        "name":'I have a issue with this - A',
        "repositary_id": '#1234',
        "author": 'Alfrad Beew',
        "staus":'active',
        "description": 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
      },
    //   {
    //     id:001,
    //     name:'I have a issue with this - A',
    //     repositary_id: '#1234',
    //     author: 'Alfrad Beew',
    //     staus:'active',
    //     discription: 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
    //   },
    //   {
    //     id:001,
    //     name:'I have a issue with this - A',
    //     repositary_id: '#1234',
    //     author: 'Alfrad Beew',
    //     staus:'active',
    //     discription: 'When using the async keyword in a commonJS module the production build will fail on runtime while the development build works as expected Did you try recovering your dependencies?'
    //   }

]

export const getIssuesSuccess = ( issues ) => {
    console.log(issues)
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


export const getIssues = () => {
    return dispatch  => {
                
                dispatch(getIssuesSuccess(data));
              //  dispatch(getCatsFail(err));
    };
};
