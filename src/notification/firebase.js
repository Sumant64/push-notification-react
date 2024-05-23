// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCA2HEMdOM7FvL4CvtzLHDwEr2QFb1yU-U",
    authDomain: "pushnotification-55577.firebaseapp.com",
    projectId: "pushnotification-55577",
    storageBucket: "pushnotification-55577.appspot.com",
    messagingSenderId: "528049784101",
    appId: "1:528049784101:web:d266a094c46277f2f9c6cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

//grant the notification permission
export const generateToken = async () => {
    try {
        const permission = await Notification.requestPermission();
        console.log(permission); //granted or denied
        if(permission === 'granted'){
            const token = await getToken(messaging, {
                vapidKey: "BO16VYUDXbZnh3KOBnoUkdFLjErcwrSAzBAedd0ViAKgJ5YwooxecaWeZm6CsH02A0IVlIRiu7WEPqTcejp5Dq8"
            })

            console.log(token)
        }
    } catch (err) {
        console.log(err);
    }
}