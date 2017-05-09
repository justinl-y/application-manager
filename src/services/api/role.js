import api from './base';

const getRole = data => (
  api.get(`/roles/${data.userId}/${data.itemId}`)
    .then(result => result)
    .catch(err => (
      // `The following error has occured: ${err}`
      console.log(err)
    ))
);

const addRole = data => (
  api.push(`/roles/${data.userId}`, data)
    .then(() => (
      'Role added.'
    ))
    .catch(err => (
      // `The following error has occured: ${err}`
      console.log(err)
    ))
);

const editRole = data => (
  api.set(`/roles/${data.userId}/${data.itemId}`, data)
    .then(() => (
      'Role edited.'
    ))
    .catch(err => (
      // `The following error has occured: ${err}`
      console.log(err)
    ))
);

const deleteRole = data => (
  api.set(`/roles/${data.userId}/${data.itemId}`, null)
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
