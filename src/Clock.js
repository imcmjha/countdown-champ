import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentDidMount = () => {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }

  leading0 = (number) => {
    return number <= 9 ? '0' + number : number;
  }

  getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date())
    const seconds = Math.floor((time / 1000) % 60)
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const hours = Math.floor((time / (1000 * 60 * 60) % 24))
    const days = Math.floor(time / (1000 * 60 * 60 * 24))

    this.setState({ seconds, minutes, hours, days })
  }

  render() {
    return (
      <div style={this.style.AppTitle}>
        <div style={this.style.clock}>{this.leading0(this.state.days)} days</div>
        <div style={this.style.clock}>{this.leading0(this.state.hours)} hours</div>
        <div style={this.style.clock}>{this.leading0(this.state.minutes)} minutes</div>
        <div style={this.style.clock}>{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }

  style = {
    AppTitle: {
      fontSize: '2rem'
    },
    clock: {
      display: 'inline',
      fontSize: '1rem',
      margin: '10px'
    },
    // clockDay: {

    // },
    // clockHours: {

    // },
    // clockMinutes: {


    // },
    // clockSeconds: {


    // }
  }
}

export default Clock;