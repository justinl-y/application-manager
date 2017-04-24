import api from './base';

const getRoles = () => api.get('/role/')
    .then(result => result)
    .catch(err => (
      `The following error has occured: ${err}`
    ));

const getRole = id => api.get(`/role/${id}`)
    .then(result => result)
    .catch(err => (
      `The following error has occured: ${err}`
    ));

const addRole = data => api.push('/role', data)
    .then(() => (
      'Role added.'
    ))
    .catch(err => (
      `The following error has occured: ${err}`
    ));

const editRole = data => api.set(`/role/${data.id}`, data)
    .then(() => (
      'Role edited.'
    ))
    .catch(err => (
      `The following error has occured: ${err}`
    ));

export default {
  getMany: getRoles,
  getOne: getRole,
  add: addRole,
  edit: editRole,
};
