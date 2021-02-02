import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';
 
class City extends Component {

  handleClick = () => {
    this.props.selectCity(this.props.city)
  }

  render() {
    
    let classes = "city";
    if (this.props.city === this.props.activeCity) {
      classes += " selected";
    }

    return (
      <div className ={classes} onClick={this.handleClick}>
        <h2>{this.props.city.name}</h2>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
