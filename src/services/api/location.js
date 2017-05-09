import api from './base';

const getLocations = () => api.get('/locations/')
    .then(result => result)
    .catch(err => (
      `The following error has occured: ${err}`
    ));

const addLocation = data => api.push('/locations', data)
    .then(() => (
      'Location added.'
    ))
    .catch(err => (
      `The following error has occured: ${err}`
    ));

export default {
  get: getLocations,
  add: addLocation,
};
