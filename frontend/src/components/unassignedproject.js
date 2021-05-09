import React, { Component } from "react";
import axios from "axios";
import {  Table } from "semantic-ui-react";


class unassignedproject extends Component {
    state = {
        unassignedprojects: []
    }
    
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/removeassignedprojectassignments/`)
          .then(res => {
            const unassignedprojects = res.data;
            this.setState({ unassignedprojects });
          })
      }
  
      render() {
        return (
            <div>
                <h2>Unassigned Project</h2>
                <Table singleLine>
                    <Table.Header>
                         <Table.Row>
                              <Table.HeaderCell>Project Id</Table.HeaderCell>
                              <Table.HeaderCell>Project Title</Table.HeaderCell>
                          </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.unassignedprojects.map((unassignedproject) => <tr>
                            <td> {unassignedproject.ProjectId}</td>
                            <td> {unassignedproject.ProjectTitle}</td>
                        </tr>)} 
                        
                    </Table.Body>
                </Table>

           </div>    
        )
      }
}

export default unassignedproject;