import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAl1xl6-9BNdpAc_FuYeIAq1zJjJHAs89I",
  authDomain: "list-imei.firebaseapp.com",
  projectId: "list-imei",
  storageBucket: "list-imei.appspot.com",
  messagingSenderId: "975717760165",
  appId: "1:975717760165:web:39a49460b444e320a1214c",
  measurementId: "G-5CSVEVE5SF"
}

 export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()
 


// const { db } = firebase
//     .initializeApp(firebaseConfig)
//     .firestore()
// export { db }

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }











