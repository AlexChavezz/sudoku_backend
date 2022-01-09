const { Router } = require('express');

const router = Router();

router.post('/', ( req, res ) => {
    const { hours, minutes, secounds } = req.body;
    return res.json({hours, minutes, secounds})
})


module.exports = router;