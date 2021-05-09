import React, { Component } from "react";
import axios from "axios";
import {  Table } from "semantic-ui-react";


class judge_assignment extends Component {
    state = {
        judge_assignments: []
    }
    
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/display_judge_assignments/`)
          .then(res => {
            const judge_assignments = res.data;
            this.setState({ judge_assignments });
          })
      }
  
      render() {
        return (
            <div>
                <Table singleLine>
                    <Table.Header>
                         <Table.Row>
                              <Table.HeaderCell>Ja Id</Table.HeaderCell>
                              <Table.HeaderCell>Goal Score</Table.HeaderCell>
                              <Table.HeaderCell>Plan Score</Table.HeaderCell>
                              <Table.HeaderCell>ActionScore</Table.HeaderCell>
                              <Table.HeaderCell>ResultAnalysisScore</Table.HeaderCell>
                              <Table.HeaderCell>CommunicationScore</Table.HeaderCell>
                              <Table.HeaderCell>RawScore</Table.HeaderCell>
                              <Table.HeaderCell>Zscore</Table.HeaderCell>
                              <Table.HeaderCell>Rank</Table.HeaderCell>
                              <Table.HeaderCell>JudgeId</Table.HeaderCell>
                              <Table.HeaderCell>ProjectId</Table.HeaderCell>
                          </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.judge_assignments.map((judge_assignment) => <tr>
                            <td> {judge_assignment.JaId}</td>
                            <td> {judge_assignment.GoalScore}</td>
                            <td> {judge_assignment.PlanScore}</td>
                            <td> {judge_assignment.ActionScore}</td>
                            <td> {judge_assignment.ResultAnalysisScore}</td>
                            <td> {judge_assignment.CommunicationScore}</td>
                            <td> {judge_assignment.RawScore}</td>
                            <td> {judge_assignment.Zscore}</td>  
                            <td> {judge_assignment.Rank}</td>  
                            <td> {judge_assignment.JudgeId}</td>  
                            <td> {judge_assignment.ProjectId}</td>  
                        </tr>)}
                        
                        
                    </Table.Body>
                </Table>

           </div>    
        )
      }
}

export default judge_assignment;