const express = require('express');
const { admin } = require('../firebase/config');
const router = express.Router();




router.post('/', async  (req,res) => {

    const db = admin.database();
    const notificaciones = db.ref('notificaciones/');

    console.log(req.body)

    notificaciones.push(req.body)

//    const noti = await notificaciones.get();

//    console.log(noti.val())

    res.json({
        ok:true,
        msg:'notifications'
    })

})

router.get('/', (req,res) => {

    console.log(req.body)

    res.json({
        ok:true,
        msg:'get notifications'
    })

})


module.exports = router;