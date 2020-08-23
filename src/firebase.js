import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAPjrafbRQwgmNXcdWKcPoGSfVPmHADAe4",
	authDomain: "whatsapp-clone-d85d1.firebaseapp.com",
	databaseURL: "https://whatsapp-clone-d85d1.firebaseio.com",
	projectId: "whatsapp-clone-d85d1",
	storageBucket: "whatsapp-clone-d85d1.appspot.com",
	messagingSenderId: "975742849105",
	appId: "1:975742849105:web:095cd159834c927366a870",
	measurementId: "G-WPBJ9RQLMH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
