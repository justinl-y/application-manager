import api from './base';

const getUserDetails = userId => api.get(`/userDetails/${userId}`)
    .then(result => result)
    .catch((error) => {
      console.log(error);
    });

const createUserDetails = (userId, data) => api.set(`/userDetails/${userId}`, data);

const update = (userId, data) => api.change(`/userDetails/${userId}`, data)
    .then(() => {
      console.log('User details modified');
    })
    .catch((error) => {
      console.log(error);
    });

export default {
  get: getUserDetails,
  createUserDetails,
  update,
};
