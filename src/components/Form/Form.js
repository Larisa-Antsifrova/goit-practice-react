import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    nickname: '',
    email: '',
  };

  nameInputId = shortid.generate();

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log('Submitted!');
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      nickname: '',
      email: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name </label>
        <input
          id={this.nameInputId}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <label>
          Nickname{' '}
          <input
            type="text"
            name="nickname"
            value={this.state.nickname}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email{' '}
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
