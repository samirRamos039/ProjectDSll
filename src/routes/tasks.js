const {Router} = require('express');
const { eliminar,select,insert,update } = require('../controllers/crudController');

const router = Router();


router.get('/tarea', select)

router.post('/tasks',insert)

router.delete('/tasks',eliminar)

router.put('/tasks',update)



module.exports = router;