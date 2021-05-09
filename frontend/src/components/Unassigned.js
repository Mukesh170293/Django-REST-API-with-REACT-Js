import React, { Component } from "react";
import axios from "axios";
import {  Table } from "semantic-ui-react";


class unassigned extends Component {
    state = {
        unassignedjudges: []
    }
    
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/removeassignedjudgeassignments/`)
          .then(res => {
            const unassignedjudges = res.data;
            this.setState({ unassignedjudges });
          })
      }
  
      render() {
        return (
            <div>
                <h2>Unassigned Judge</h2>
                <script src="sortable.js"></script>
                <script src="filterRecords.js"></script>
               
                <Table singleLine>
                    <Table.Header  class="sortable">
                         <Table.Row>
                              <Table.HeaderCell>Judge Id</Table.HeaderCell>
                              <Table.HeaderCell>Judge Name</Table.HeaderCell>
                          </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.unassignedjudges.map((unassignedjudge) => <tr class="item">
                            <td> {unassignedjudge.JudgeId}</td>
                            <td> {unassignedjudge.Name}</td>
                        </tr>)} 
                        
                    </Table.Body>
                </Table>

           </div>    
        )
      }
}

export default unassigned;