import React, { Component } from "react";
import Filter from '../filter/filter'
import Pagination from '../pagination/pagination'
import {connect} from 'react-redux'
import * as issueListActions from '../../store/actions/listActions'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'




class IssueList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {

    this.props.onGettingIssues();

  }  

//   myChangeHandler = event => {
//     let val = event.target.value;
//     this.props.changedTitle(val);
//   };

  render() {
  
  const style_li={
    display: "block",
    textAlign: "left",
    padding: "5px 10px 15px 5px",
    textDecoration: "none",
  }

  const style_link={
    textAlign: "left",
    textDecoration: "none",
    color: "#333",
  }
    return (
      <div>
        <Filter/>
        <ul >
            { this.props.issues.map((issue,i) => //this.state.cats
            <li key= {i} style={style_li}>
                <div  >
                <Link to={"/issue/"+issue.id} style={style_link}>   
                <h3>{issue.name}</h3>
                </Link>
                {issue.description}
                </div>
            </li>
            )}
         </ul>
         <br></br>
         <Pagination/>
      </div>
    );
  }
}


const mapStateToProps = state =>{
    return{

        issues:state.issueList.issues,

    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onGettingIssues: () => dispatch(issueListActions.getIssues())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IssueList);
