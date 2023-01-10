import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM8GSt61ORAsNJQpBbjypw1302D8JTRHo",
  authDomain: "gamers-timeline.firebaseapp.com",
  projectId: "gamers-timeline",
  storageBucket: "gamers-timeline.appspot.com",
  messagingSenderId: "889617116496",
  appId: "1:889617116496:web:ced5348abf4dac9ca09055",
  measurementId: "G-8449DX0HW4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')


