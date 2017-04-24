import api from './base';

const getUserDetails = userId => api.get(`/userDetails/${userId}`)
    .then(result => result)
    .catch(err => (
      `The following error has occured: ${err}`
    ));

const createUserDetails = (userId, data) => api.set(`/userDetails/${userId}`, data);

const update = (userId, data) => api.change(`/userDetails/${userId}`, data)
    .then(() => (
      'User details modified'
    ))
    .catch(err => (
      `The following error has occured: ${err}`
    ));

export default {
  get: getUserDetails,
  createUserDetails,
  update,
};
