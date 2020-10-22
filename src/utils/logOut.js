import { auth } from '../connection.js';

const logOut = () => {
  auth()
    .signOut()
    .catch((error) => {
      console.error(error);
    });
};

export default logOut;
