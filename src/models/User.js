const pool = require('../utils/databaseConnection') 

module.exports = {
    
    registerUser: async function (newUser)  {
        const { insertId } = await pool.query('INSERT INTO users SET ?', [newUser]);
        if (!insertId) throw 'user not created'  
        return true;
    },

    createUser: async function (newUser)  {
        const { insertId } = await pool.query('INSERT INTO users SET ?', [newUser]);
        if (!insertId) throw 'user not created'  
        return true;
    },

    getUserByEmail: async (email) => {
        const rawUser = await pool.query('SELECT * FROM `users` WHERE `email` = ?', [email]);
        const user = {...rawUser[0]};
        if ( Object.keys(user).length === 0 ) throw 'user not found' ;

        console.log(user)
        return user;
    },

    getUserByID: async (userID) => {
        const rawUser = await pool.query('SELECT * FROM `users` WHERE `id` = ?', [userID]);
        const user = {...rawUser[0]};
        if ( Object.keys(user).length === 0 ) throw 'user not found' ;
        return user;
    },

};