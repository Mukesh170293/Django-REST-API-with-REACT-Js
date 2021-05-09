import React from 'react';
import axios from 'axios';

export default class removeproject extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://127.0.0.1:8000/deleteprojectassignment/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <br></br><br></br><br></br>
        <form onSubmit={this.handleSubmit}>
          <label>
            Project ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete Project</button>
        </form>
      </div>
    )
  }
}