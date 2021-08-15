import firebase from 'firebase';

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBwsJJq-MjCl2s220R-JOxSjr7fUAQqHqE',
    authDomain: 'mydoctor-ae389.firebaseapp.com',
    databaseURL: 'https://mydoctor-ae389-default-rtdb.firebaseio.com',
    projectId: 'mydoctor-ae389',
    storageBucket: 'mydoctor-ae389.appspot.com',
    messagingSenderId: '574557560041',
    appId: '1:574557560041:web:3527551846f0b4cdcfe478',
    measurementId: 'G-FDZM0YLKLP',
  });
}


const Fire = firebase;

export default Fire;
