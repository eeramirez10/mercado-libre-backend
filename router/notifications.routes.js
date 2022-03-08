const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {

    console.log(req.body)

    res.json({
        ok:true,
        msg:'notifications'
    })

})


module.exports = router;