import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    if (!this.props.activeCity) {
      return (
        <div className="active-city-holder">
          <h1> &larr; SELECT A CITY, AND START YOUR CODE JOURNEY...</h1>
        </div>
      );
    } else {
      return(
        <div>
          <div className="lewagon-logo"><img src="https://dwj199mwkel52.cloudfront.net/assets/core/svg/logo-lewagon-5ff5f090209d8d3bf493790d7935822208011748adb83a2fbc6bcaaf05a289ef.svg" alt=""/></div>
          <div className="active-city">
            <h1>{this.props.activeCity.name}</h1>
            <p>{this.props.activeCity.address}</p>
            <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} width="100%" height="70%"/>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  return { activeCity: reduxState.activeCity }
}

export default connect(mapStateToProps)(ActiveCity); 