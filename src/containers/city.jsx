import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <div className ="city">
        <h2>{this.props.city.name}</h2>
      </div>
    )
  }
}

export default City;

// just want city.name in h2