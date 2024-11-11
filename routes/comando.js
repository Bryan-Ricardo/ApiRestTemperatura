const { Router } = require('express');

const { comandosGet,
    comandosPut,
    comandosPost,
    comandosDelete,
    comandosPatch } = require('../controllers/comandos');

const router = Router();


router.get('/', comandosGet );

router.put('/:id', comandosPut );

router.post('/', comandosPost );

router.delete('/', comandosDelete );

router.patch('/', comandosPatch );


module.exports = router;