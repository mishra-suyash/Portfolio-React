import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
	apiKey: 'AIzaSyCX7QijWxe6SJfCo8sjZHPC5oBYXNlhq0I',
	authDomain: 'portfolio-45e33.firebaseapp.com',
	projectId: 'portfolio-45e33',
	storageBucket: 'portfolio-45e33.appspot.com',
	messagingSenderId: '811719981779',
	appId: '1:811719981779:web:6e87f30c78a39aa2ae7226',
	measurementId: 'G-2LGD5KKFJ4',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);