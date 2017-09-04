import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCYqAm9zXM1Gl4wthTp39kMFdpAzuOm4-o',
  authDomain: 'pollen-landing.firebaseapp.com',
  databaseUrl: 'https://pollen-landing.firebaseio.com/',
  storageBucket: 'gs://pollen-landing.appspot.com'
}

firebase.initializeApp(config)

const db = firebase.database()

export default db
