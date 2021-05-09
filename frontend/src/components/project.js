import React, { Component } from "react";
import axios from "axios";
import {  Table } from "semantic-ui-react";


class project extends Component {
    state = {
        projects: []
    }
    
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/displayprojects/`)
          .then(res => {
            const projects = res.data;
            this.setState({ projects });
          })
      }
  
      render() {
        return (
            <div>
                <Table singleLine>
                    <Table.Header>
                         <Table.Row>
                              <Table.HeaderCell>Project Id</Table.HeaderCell>
                              <Table.HeaderCell>Table Id</Table.HeaderCell>
                              <Table.HeaderCell>Description</Table.HeaderCell>
                              <Table.HeaderCell>Project Title</Table.HeaderCell>
                              <Table.HeaderCell>Project Category</Table.HeaderCell>
                              <Table.HeaderCell>Avg Score</Table.HeaderCell>
                              <Table.HeaderCell>Rank</Table.HeaderCell>
                              <Table.HeaderCell>Zscore</Table.HeaderCell>
                              <Table.HeaderCell>ZscoreRank</Table.HeaderCell>
                              <Table.HeaderCell>Avg_01</Table.HeaderCell>
                              <Table.HeaderCell>Avg_01Rank</Table.HeaderCell>
                              <Table.HeaderCell>Scaled Score</Table.HeaderCell>
                              <Table.HeaderCell>Scaled Rank</Table.HeaderCell>
                              <Table.HeaderCell>Scaled Z</Table.HeaderCell>
                              <Table.HeaderCell>Isef Score</Table.HeaderCell>
                              <Table.HeaderCell>Isef Rank</Table.HeaderCell>
                              <Table.HeaderCell>Category Rank</Table.HeaderCell>
                              <Table.HeaderCell>Fair Rank</Table.HeaderCell>
                              <Table.HeaderCell>Judges Assigned</Table.HeaderCell>
                              <Table.HeaderCell>Graded</Table.HeaderCell>
                              <Table.HeaderCell>judges_assigned_half</Table.HeaderCell>
                          </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.projects.map((project) => <tr>
                            <td> {project.ProjectId}</td>
                            <td> {project.TableId}</td>
                            <td> {project.Description}</td>
                            <td> {project.ProjectTitle}</td>
                            <td> {project.ProjectCategory}</td>
                            <td> {project.AvgScore}</td>
                            <td> {project.Rank}</td>
                            <td> {project.Zscore}</td>
                            <td> {project.ZscoreRank}</td>
                            <td> {project.Avg_01}</td>
                            <td> {project.Avg_01Rank}</td>
                            <td> {project.ScaledScore}</td>
                            <td> {project.ScaledRank}</td>
                            <td> {project.Scaledz}</td>
                            <td> {project.IsefScore}</td>
                            <td> {project.IsefRank}</td>
                            <td> {project.CategoryRank}</td>
                            <td> {project.FairRank}</td>
                            <td> {project.judges_assigned}</td>
                            <td> {project.graded}</td>
                            <td> {project.judges_assigned_half}</td>

                        </tr>)}
                        
                        
                    </Table.Body>
                </Table>

           </div>    
        )
      }
}

export default project;