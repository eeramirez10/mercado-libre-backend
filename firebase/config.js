
const admin = require('firebase-admin');

const serviceAccount = require('./lumi-417ec-firebase-adminsdk-ziish-d57f42c252.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:"https://lumi-417ec-default-rtdb.firebaseio.com/"

})



module.exports = { admin }