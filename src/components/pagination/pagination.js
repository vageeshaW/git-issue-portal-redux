import React, { Component } from "react";

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
   // this.props.paginationHandler(i);
   console.log("clicked")
  }

  render() {
  //  const { pageSize, page, total } = this.props.pagination;


    let pageSize=10
    let total= 150
    let page=1
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

