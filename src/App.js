import React, { Component, Fragment } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 31, 2019',
      newDeadline: ''
    }
    this.submitDeadline = this.submitDeadline.bind(this);
    // this.changeDeadline = this.changeDeadline.bind(this);
  }

  changeDeadline = (e) => {
    let { newDeadline } = this.state
    newDeadline = e.target.value
    this.setState({ newDeadline });
  }

  submitDeadline(e) {
    e.preventDefault();
    let { deadline, newDeadline } = this.state
    deadline = isNaN(Date.parse(newDeadline)) ? deadline : newDeadline
    this.setState({ deadline });
  }

  render() {
    return (
      <div style={this.style.AppStyle}>
        <h1>Countdown to {this.state.deadline}</h1>
        <Clock deadline={this.state.deadline} />
        <div>
          <input type="text" placeholder="enter new date" onChange={this.changeDeadline} />
          <button type="submit" onClick={(e) => this.submitDeadline(e)}>Submit</button>
        </div>
      </div>
    )
  }

  style = {
    AppStyle: {
      textAlign: 'center',
      fontSize: '1.2rem',
      marginTop: '12%'
    }
  }
}

export default App;