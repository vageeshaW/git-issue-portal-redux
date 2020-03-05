import React, { Component } from "react";
import * as issueActions from "../../store/actions/issueActions";
import { connect } from "react-redux";

class Issue extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const issueId = this.props.match.params.id;
    this.props.onGettingIssue(issueId);
  }


  render() {
    const { input } = this.props;
    return (
      <div>
        <h1>{this.props.name}</h1>
        {/* <p>Name:</p>
        <h3>{this.props.name}</h3> */}
        {/* <input
          name="name"
          type="text"
          onChange={this.myChangeHandler}
          value={this.props.name}
        /> */}
        <h4>{this.props.description}</h4>
        {/* <input
          name="description"
          type="text"
          onChange={this.myChangeHandler}
          value={this.props.description}
        /> */}
      </div>
    
      
    );
  }
}

const mapStateToProps = state => {
   
  return {
    name: state.issue.name,
    description: state.issue.description,
    repository_id:state.issue.repository_id,
    author:state.issue.autor,
    status:state.issue.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGettingIssue: issueId => dispatch(issueActions.getIssue(issueId)),     
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
