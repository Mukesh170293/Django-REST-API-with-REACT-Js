import React, { Component } from "react";
import axios from "axios";
import {  Table } from "semantic-ui-react";


class student extends Component {
    state = {
        students: []
    }
    
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/display_students/`)
          .then(res => {
            const students = res.data;
            this.setState({ students });
          })
      }
  
      render() {
        return (
            <div>
                <Table singleLine>
                    <Table.Header>
                         <Table.Row>
                              <Table.HeaderCell>Student Id</Table.HeaderCell>
                              <Table.HeaderCell>School</Table.HeaderCell>
                              <Table.HeaderCell>Project Id</Table.HeaderCell>
                          </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.students.map((student) => <tr>
                            <td> {student.Id}</td>
                            <td> {student.School}</td>
                            <td> {student.ProjectId}</td>

                        </tr>)}
                        
                        
                    </Table.Body>
                </Table>

           </div>    
        )
      }
}

export default student;