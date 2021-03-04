import React, { Component } from 'react';

class Form extends Component {
  state = {};

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name{' '}
          <input type="text" name="name" onChange={this.handleInputChange} />
        </label>
        <label>
          Nickname{' '}
          <input
            type="text"
            name="nickname"
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email{' '}
          <input type="email" name="email" onChange={this.handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
