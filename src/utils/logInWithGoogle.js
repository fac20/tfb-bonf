import { auth } from '../connection.js';

const logInWithGoogle = () => {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
};
export default logInWithGoogle;
