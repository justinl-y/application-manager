import api from './base';

const getRoleTypes = () => api.get('/roleTypes/')
    .then(result => result)
    .catch(err => (
      `The following error has occured: ${err}`
    ));

const addRoleType = data => api.push('/roleTypes', data)
    .then(() => (
      'Role type added.'
    ))
    .catch(err => (
      `The following error has occured: ${err}`
    ));

export default {
  get: getRoleTypes,
  add: addRoleType,
};
