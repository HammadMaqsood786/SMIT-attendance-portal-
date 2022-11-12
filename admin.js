import { signInFirebase } from "../config/firebase.js";

window.signIn = async function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await signInFirebase(email, password);
        alert("Signed In Successfully");
        window.location.href = 'index.html'
    } catch (e) {
        const errorElem = document.getElementById('error');
        errorElem.innerHTML = e.message;
    }
}