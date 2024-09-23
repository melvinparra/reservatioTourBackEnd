
const admin = require('firebase-admin');
const serviceAccount = require('../config/firBaseCred.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://reservationtour-38ed1.firebaseio.com'
});
const db = admin.firestore();

module.exports = db;