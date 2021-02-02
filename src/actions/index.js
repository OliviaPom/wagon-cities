// TODO: add and export your own actions
import cities from '../cities';

// action creator - function that returns object with payload
// this is where an API will be called but in this case just simulating a db
export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}