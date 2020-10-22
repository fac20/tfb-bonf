import { auth } from '../connection';

const logIn = (email, password) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.error(error.message);
    });
};

export default logIn;
