
const { Router } = require('express');

const { ambientesGet,
    ambientesPut,
    ambientesPost,
    ambientesDelete,
    ambientesPatch } = require('../controllers/ambientes');

const router = Router();


router.get('/', ambientesGet );

router.put('/:id', ambientesPut );

router.post('/', ambientesPost );

router.delete('/', ambientesDelete );

router.patch('/', ambientesPatch );




module.exports = router;