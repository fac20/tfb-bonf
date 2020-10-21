import { auth } from '../connection';

const logIn = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export default logIn;
