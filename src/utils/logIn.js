import { auth } from '../connection';

const logIn = (email, password) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .catch(() => {});
};

export default logIn;
