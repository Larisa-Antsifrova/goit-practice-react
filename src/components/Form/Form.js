import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    nickname: '',
    email: '',
    experience: 'junior',
    agreement: false,
  };

  nameInputId = shortid.generate();

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleAgreement = event => {
    this.setState({
      agreement: event.currentTarget.checked,
    });

    console.log(event.currentTarget.checked);
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
      experience: 'junior',
      agreement: false,
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
        <p>Your experience level:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleInputChange}
            checked={this.state.experience === 'junior'}
          />{' '}
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleInputChange}
            checked={this.state.experience === 'middle'}
          />{' '}
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleInputChange}
            checked={this.state.experience === 'senior'}
          />{' '}
          Senior
        </label>
        <p>Conditions</p>
        <label>
          <input
            type="checkbox"
            name="agreement"
            checked={this.state.agreement}
            onChange={this.handleAgreement}
          />
          I agree
        </label>
        <button type="submit" disabled={!this.state.agreement}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
