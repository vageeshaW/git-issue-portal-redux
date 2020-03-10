import React, { Component } from "react";
import Filter from "../filter/filter";
import Pagination from "../pagination/pagination";
import { connect } from "react-redux";
import * as issueListActions from "../../store/actions/listActions";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

class IssueList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGettingIssues();
  }
  renderIssueList() {
   // let issues = this.props.issues;
    let page_number = this.props.paginationData.pageNo;
    let page_size = this.props.paginationData.pageSize

    let issues = this.props.issues.slice((page_number - 1) * page_size, page_number * page_size);

    const style_li = {
      display: "block",
      textAlign: "left",
      padding: "5px 10px 15px 5px",
      textDecoration: "none"
    };

    const style_link = {
      textAlign: "left",
      textDecoration: "none",
      color: "#333"
    };
    return issues.map((issue, i) => {
      return (
        <li key={i} style={style_li}>
          <div>
            <Link to={"/issue/" + issue.id} style={style_link}>
              <h3>{issue.name}</h3>
            </Link>
            {issue.description}
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Filter />
        <h4>{this.props.paginationData.total} records found </h4>
        <ul>{this.renderIssueList()}</ul>
        <br></br>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    issues: state.issueList.filterdIssues,
    filter: state.filter,
    paginationData: state.paginationData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGettingIssues: () => dispatch(issueListActions.getIssues())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
