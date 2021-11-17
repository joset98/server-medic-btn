
module.exports = {
    database:{
        connectionLimit : 10,
        host            : process.env.DB_HOST || 'db4free.net',
        user            : process.env.DB_USER || 'medic_jt',
        password        : process.env.DB_PASSWORD || 'WmEMHt96df62CnL',
        database        : process.env.DB_NAME || 'db_medictest'
    }
}