const { userRegistration, authUser} = require('../services/auth')

const login = async (req, res) => {
    const {email, password} = req.body; 
    const credentials = {
        email,
        password
    };

    try {
        const authToken = await authUser(credentials);
        res.header('auth-token').send(`user login success ${authToken}`);
    } catch (error) {
        console.log(error)
        res.status(500).send('there was an error, user cannot login');
    }
}

const signin = async (req, res) => {
    const {username, password} = req.body; 
    console.log(req.body)
    const newUser = {
        username,
        password
    };
    
    try {
        await userRegistration(newUser);
        res.send('user created');
    } catch (error) {
        console.log(error)
        res.status(500).send('there was an error, user not created');
    }
}

const logout = async (req, res) => {
    const { email } = req.body; 
    console.log(email)
    try {
        const user = await getUserByEmail(email);
        console.log(user)
        res.send('user find');
    } catch (error) {
        res.status(500).send('there was an error, user not found');
    }
}

module.exports = {
    login,
    signin,
    logout
}