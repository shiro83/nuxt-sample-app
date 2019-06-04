import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    // -------Firebaseのページからconfigの部分だけコピーする-------
    const config = {
        apiKey: 'AIzaSyCTLaAbssgQMtWLC_xqVxHu2rgSNAFghMc',
        authDomain: 'nw-lesson.firebaseapp.com',
        databaseURL: 'https://nw-lesson.firebaseio.com',
        projectId: 'nw-lesson',
        storageBucket: 'nw-lesson.appspot.com',
        messagingSenderId: '887214119660'
    }
    // -----------------
    firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export {fireDb}