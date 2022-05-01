const { getFirestore, collection, getDocs, addDoc } = require('firebase/firestore/lite'); 
const router = require('express').Router();
const { app } = require('../firebase/config');

const db = getFirestore(app);



router.post('/', async  (req,res) => {


    try {

        const notificationsCol = collection(db,'notificaciones')

        const notificacionesRef = await addDoc(notificationsCol,req.body)


        res.json({
            ok:true,
            msg:`Insertado correctamente con el id ${notificacionesRef.id}` 
        })
        
    } catch (error) {

        res.status(400).json({
            ok:false,
            msg:error
        })
        
    }




})

router.get('/', (req,res) => {

    console.log(req.body)

    res.json({
        ok:true,
        msg:'get notifications'
    })

})


module.exports = router;