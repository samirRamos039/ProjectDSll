const {router} = require('../src/routes/tasks')
import  request  from 'supertest';

const Router = router;

describe('GET /task', () => {

    test('status code = 200', async() => { 
        const respond = await request(router).get('/seleccionar').send()
     })
})