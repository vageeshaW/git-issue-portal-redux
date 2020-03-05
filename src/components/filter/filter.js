import React, { Component } from "react";
import {connect} from 'react-redux'
import * as filterActions from '../../store/actions/filterActions'

class Filter extends Component {
  constructor(props) {
    super(props);
   this.searchHandler = this.searchHandler.bind(this)
  
  }

  searchHandler = (event) => {
     
     let val = event.target.value;
     this.props.onFilteringIssues('status',val) 
     console.log(val)    
  }


  render() {  
    const style_search = {
        backgroundRepeat: "no-repeat", /* Do not repeat the icon image */
        width: "80%", 
        fontSize: "16px", /* Increase font-size */
        padding: "12px 20px 12px 40px", /* Add some padding */
        border: "1px solid #ddd", /* Add a grey border */
        marginBottom: "12px", /* Add some space below the input */
    }
   
    const style_dropDown={
        backgroundColor: "#333",
        color: "white",
        padding: "12px 30px 12px 30px",
        fontSize: "16px",
        border: "none",
        cursor: "pointer",
    }

    return (
      <div>
          <br></br>
        <select style={style_dropDown} >
        <option value="filter">Filter</option>
        <option value="author"> By Author</option>
        <option value="status">By Status</option>
        </select>
        <input type="text"  style={style_search} placeholder="Search...." onChange={this.searchHandler} />
       
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{

    issues:state.issueList.filterdIssues,

  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onFilteringIssues: (type,value) => dispatch(filterActions.filterIssues(type,value))
      
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter);

