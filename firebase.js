
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    onSnapshot,
    getDoc,
    updateDoc,
    doc
}
    from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"
//10 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtv39_47PFSEN4y8Ljbg2ooOEiS7wO2lw",
    authDomain: "fir-crud-f8faf.firebaseapp.com",
    projectId: "fir-crud-f8faf",
    storageBucket: "fir-crud-f8faf.appspot.com",
    messagingSenderId: "783064924497",
    appId: "1:783064924497:web:fc83d0d4a86e3d2b62d370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) => {
    addDoc(collection(db, "tasks"), { title, description })
}

export const getTasks = () => getDocs(collection(db, 'tasks')) //Extraemos la colleccion de tareas

export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)

export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id)); // Extraemos solo una tarea para borrar

export const getTask = id => getDoc(doc(db, 'tasks', id));

export const updateTask = (id, newfields) => updateDoc(doc(db, 'tasks', id), newfields)