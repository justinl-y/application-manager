import api from './base';

const getRoles = () => api.get('/roles')
    .then(result => result)
    .catch(err => (
      // `The following error has occured: ${err}`
      console.log(err)
    ));

export default {
  get: getRoles,
};
