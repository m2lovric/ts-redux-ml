import { getAuth, FacebookAuthProvider } from 'firebase/auth';

export const provider = new FacebookAuthProvider();

export const auth = getAuth();
