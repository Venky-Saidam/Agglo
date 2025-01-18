import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAZrtQjAqsB79zuXkzv21FqI_gWBn87hYA",
    authDomain: "myopia-3f3f9.firebaseapp.com",
    projectId: "myopia-3f3f9",
    storageBucket: "myopia-3f3f9.firebasestorage.app",
    messagingSenderId: "855230834825",
    appId: "1:855230834825:web:e3109a8930528328c73e58"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, (user)=>{
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    if(loggedInUserId) {
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()) {
                const userData = docSnap.data();
                document.getElementById('loggedusername').innerText = userData.username;
                document.getElementById('userage').innerText = userData.age;
                document.getElementById('useremail').innerText = userData.email;

            }
            else {
                console.log("No document found")
            }
        })
        .catch((error)=>{
            console.error("Error getting document");
        })
    }
    else {
        console.log("User Id not found in Local Storage")
    }
})
