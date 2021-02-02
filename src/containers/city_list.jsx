import React, { Component } from 'react';
import City from './city';

class CityList extends Component {

  // const cities = [
  //     { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  //     { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  //     { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
  // ];

  static defaultProps = {
    cities: [
          { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
          { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
          { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' }
      ]
  }

  componentWillMount() {
    // dispatch an action to load cities
  }

  render() {
    return (
      <div>
        {this.props.cities.map((city) => {
          return <City key={city.name} city={city} />;
        })}
      </div>
    );
  }
}

export default CityList;