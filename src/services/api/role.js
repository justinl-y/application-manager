import api from './base';

const getRole = id => (
  api.get(`/roles/${id}`)
    .then(result => result)
    .catch(err => (
      // `The following error has occured: ${err}`
      console.log(err)
    ))
);

const addRole = data => (
  api.push('/roles', data)
    .then(() => (
      'Role added.'
    ))
    .catch(err => (
      // `The following error has occured: ${err}`
      console.log(err)
    ))
);

const editRole = data => (
  api.set(`/roles/${data.id}`, data)
    .then(() => (
      'Role edited.'
    ))
    .catch(err => (
      // `The following error has occured: ${err}`
      console.log(err)
    ))
);

const deleteRole = id => (
  api.set(`/roles/${id}`, null)
    .then(() => (
      'Role deleted.'
    ))
    .catch(err => (
      // `The following error has occured: ${err}`
      console.log(err)
    ))
);

export default {
  get: getRole,
  add: addRole,
  edit: editRole,
  delete: deleteRole,
};
