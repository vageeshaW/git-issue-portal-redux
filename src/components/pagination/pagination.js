import React, { Component } from "react";
import { connect } from "react-redux";
import * as paginationActions from "../../store/actions/paginationAction"

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
   console.log(i)
   let page = i
   let total= this.props.issues.length
   this.props.onClickingPage(page,total) 
  }

  render() {
    console.log(this.props.issues.length)
    let pageSize=4
    let total= this.props.issues.length
    let page=this.props.paginationData.page
    let pages = Math.ceil(total / pageSize);

    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
      let style = {
        backgroundColor: page === i ? "grey" : "white",
        width: 15,
        margin: 5,
        float: "left",
        padding: "5px 10px",
        border: "2px solid #333",
        align: "center",
        display: "inlineBlock",
  
      };
      pageNumbers.push(
        <div
          style={style}
          key={i}
          onClick={() => {
            this.handleClick(i);
          }}
        >
          {i}
        </div>
      );
    }

    return (
      
      <div style= {{justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",}} id="page-numbers">
        {pageNumbers}  
      </div>
     
    );
  }
}


const mapStateToProps = state =>{
  return{
    issues: state.issueList.filterdIssues,
    paginationData:state.paginationData

  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onClickingPage : (pageNo,total,pageSize) => dispatch(paginationActions.getDataWithPagination(pageNo,total,pageSize))
      
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Pagination);



