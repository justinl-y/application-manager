import firebase from 'firebase';

const FIRBASE_VALUE_TYPE = 'value';

const get = path =>
  // returns a promise of an actual object, not a datasnapshot
   firebase.database()
    .ref(path)
    .once(FIRBASE_VALUE_TYPE)
    .then(result => result.val());

// to add data with the id created by firebase
const push = (path, data) => firebase.database()
    .ref(path)
    .push(data)
    // return new Id?
;

const createEmptyChild = path => firebase.database()
    .ref()
    .child(path)
    .push()
    .key;

// to add data with the id provided by client
const set = (path, data) => firebase.database()
    .ref(path)
    .set(data);

// for update
/* const changeOne = (path, data) => {
  return firebase.database()
    .ref(path)
    .update(data);
};*/

const change = data => firebase.database()
    .ref()
    .update(data);

// for delete - TODO multiple delete with .update(null)
const remove = path => firebase.database()
    .ref(path)
    .remove();

export default {
  get,
  push,
  createEmptyChild,
  set,
  // changeOne,
  change,
  remove,
};
