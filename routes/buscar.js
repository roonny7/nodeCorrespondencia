const { Router}  = require ( 'express');
const { buscaCorrespondencia } = require('../controllers/busquedaCorrespondencia');
//const { reportesempleadossexo, reportesescolaridad } = require('../controllers/reportesempleadosexo');
const router = Router();

router.get('/buscar/',  buscaCorrespondencia);
/*router.get('/reportesescolaridad/',  reportesescolaridad);


router.get('/totallicitaciones/',  listadoLicitaciones);
router.get('/totallicitaciones/:id', licitacionId);
router.get('/totalanexos/:id', listadoAnexos);*/


module.exports = router;