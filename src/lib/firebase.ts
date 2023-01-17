// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, type User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAxVci0u6JRmVsIJ9-tF7607eRFJ2dYn6o',
	authDomain: 'u9-sveltekit-test-spa.firebaseapp.com',
	projectId: 'u9-sveltekit-test-spa',
	storageBucket: 'u9-sveltekit-test-spa.appspot.com',
	messagingSenderId: '546099288262',
	appId: '1:546099288262:web:dcf978c7bca8e643aa5fc7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();
const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const login = async () => {
	try {
		const auth = getAuth(app);
		const credential = await signInWithPopup(auth, provider);

		console.log(`Logged in user: ${credential.user}`);
	} catch (error) {
		console.log(error);
	}
};

export const logout = async () => {
	const auth = getAuth(app);
	await signOut(auth);
};
