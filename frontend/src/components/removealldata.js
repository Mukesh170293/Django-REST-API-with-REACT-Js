import React from 'react';
import axios from 'axios';

export default class RemoveAllData extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://127.0.0.1:8000/remove_all_data/`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
        
        <form onSubmit={this.handleSubmit}>
            <br></br><br></br><br></br>
            <p><b><i>Click Yes to delete data</i></b></p>
            <button type="submit" onChange={this.handleChange} > Yes </button>&nbsp;&nbsp;
            <button type="submit"> No </button>
        </form>
        
    )
  }
}

