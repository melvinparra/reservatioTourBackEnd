
const admin = require('firebase-admin');
const serviceAccount = require('../config/firBaseCred.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://reservationtour-38ed1.firebaseio.com'
});
const db = admin.firestore();

module.exports = db;

// const admin = require('firebase-admin');
// const path = require('path');

// // Ruta absoluta hacia el archivo de credenciales JSON en la raíz del disco C
// const serviceAccount = require('C:/FbaseReservationTour.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://reservationtour-38ed1.firebaseio.com' // Asegúrate de que esta URL sea correcta
// });

// const db = admin.firestore();

// module.exports = db;
