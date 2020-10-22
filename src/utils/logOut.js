import { auth } from '../connection.js';

const logOut = () => auth.signOut();

export default logOut;
