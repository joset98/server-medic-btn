const { Router } = require('express');

const {showUser, create} = require('../controllers/UsersController');
const { signup, login } = require('../controllers/AuthController');
const verifyToken  = require('../middleware/verifyToken')

const router = Router();

router.get('/', (req, res)  => {
    res.send('Hello world')
})

router.get('/user', (req, res)  => showUser(req, res))
router.get('/test-user', verifyToken, (req, res)  => {
    res.send('sending response to test');
})
// router.post('/user', (req, res)  => create(req, res))
router.post('/signup', (req, res)  => signup(req, res))
router.post('/login', (req, res)  => login(req, res))

module.exports = router;