import api from './base';

const getRoles = userId => (
  api.get(`/roles/${userId}`)
    .then(result => result)
    .catch(err => (
      // `The following error has occured: ${err}`
      console.log(err)
    ))
);

export default {
  get: getRoles,
};
