import React, { Component } from "react";




class topprojects extends Component {
    constructor(props) {
      super(props);
      this.state = { data: [] };
      this.onSort = this.onSort.bind(this)
    }

 
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/display_top_projects/")
        .then(function(response) {
          return response.json();
        })
        .then(items => this.setState({ data: items }));
    }
  
    onSort(event, sortKey){
      const data = this.state.data;
      data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
      this.setState({data})
    }
  
    render() {
      var newdata = this.state.data;
  
      return (
        
        <table className="m-table" >
          <thead>
            <br></br><br></br>
            <tr border-spacing= '20em' align = "center">
              <th onClick={e => this.onSort(e, 'ProjectCategory')}><b>Project Category</b></th>
              <th onClick={e => this.onSort(e, 'ProjectTitle')}>Project Title</th>
              <th onClick={e => this.onSort(e, 'ProjectId')}>ProjectId</th>
              <th onClick={e => this.onSort(e, 'CategoryRank')}>Category Rank</th>
              <th onClick={e => this.onSort(e, 'FairRank')}>Fair Rank</th>
              <th onClick={e => this.onSort(e, 'student_names')}>student names</th>
            </tr>
            
          </thead>
          <br></br><br></br>
          <tbody>
            {newdata.map(function(account, index) {
              return (
                <tr key={index} data-item={account}>
                  <td data-title="ProjectCategory">{account.ProjectCategory}</td>
                  <td data-title="ProjectTitle">{account.ProjectTitle}</td>
                  <td data-title="ProjectId">{account.ProjectId}</td>
                  <td data-title="CategoryRank">{account.CategoryRank}</td>
                  <td data-title="FairRank">{account.FairRank}</td>
                  <td data-title="student_names">{account.student_names}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }
  
  export default topprojects;
  