import React, { Component } from "react";
import axios from "axios";
import {  Table } from "semantic-ui-react";


class judge extends Component {
    state = {
        judges: []
    }
    
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/display_judges/`)
          .then(res => {
            const judges = res.data;
            this.setState({ judges });
          })
      }
  
      render() {
        return (
            <div>
                <Table singleLine>
                    <Table.Header>
                         <Table.Row>
                              <Table.HeaderCell>Judge Id</Table.HeaderCell>
                              <Table.HeaderCell>Judge name</Table.HeaderCell>
                              <Table.HeaderCell>Project Assigned</Table.HeaderCell>
                              <Table.HeaderCell>Graded</Table.HeaderCell>
                              <Table.HeaderCell>Number of Projects Judged / Number of Projects Assigned</Table.HeaderCell>
                          </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.judges.map((judge) => <tr>
                            <td align = "center"> {judge.JudgeId}</td>
                            <td align = "center"> {judge.Name}</td>
                            <td align = "center"> {judge.projects_assigned}</td>
                            <td align = "center"> {judge.graded}</td>
                            <td align = "center"> {judge.projects_assigned_half}</td>
                        </tr>)}
                        
                        
                    </Table.Body>
                </Table>

           </div>    
        )
      }
}

export default judge;