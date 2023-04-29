import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyAbmGdRWrMTn8SvNbGDPrnevBunPP2hUMA",
    authDomain: "photom-iot-1.firebaseapp.com",
    databaseURL: "https://photom-iot-1.firebaseio.com",
    projectId: "photom-iot-1",
    storageBucket: "photom-iot-1.appspot.com",
    messagingSenderId: "142429852011"
};
var fire = firebase.initializeApp(config);
export default fire;