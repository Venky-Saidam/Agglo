import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

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

document.addEventListener("DOMContentLoaded", function () {
    const signUp = document.getElementById("signupForm");
    if (signUp) {
        signUp.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = document.getElementById("signupEmail").value;
            const username = document.getElementById("signupUsername").value;
            const password = document.getElementById("signupPassword").value;
            const age = document.getElementById("signupAge").value;

            if (!email || !username || !password || !age) {
                alert("All fields are required.");
                return;
            }

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
               
                await setDoc(doc(db, "users", user.uid), {
                    email: email,
                    username: username,
                    age: age
                });

                alert("Sign-up successful!");
                window.location.href = "main.html";
            } catch (error) {
                console.error("Sign-up error:", error);
                alert(error.message);
            }
        });
    } else {
        console.error("Signup form (signupForm) not found in DOM");
    }

    const signIn = document.getElementById("loginForm");
    if (signIn) {
        signIn.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            if (!email || !password) {
                alert("Please enter both email and password.");
                return;
            }

            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                localStorage.setItem("loggedInUserId", user.uid);
                alert("Login successful!");
                window.location.href = "main.html";
            } catch (error) {
                console.error("Login error:", error);
                alert(error.message);
            }
        });
    } else {
        console.error("Login form (loginForm) not found in DOM");
    }
});
