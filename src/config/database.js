
module.exports = {
    database:{
        connectionLimit : 10,
        host            : process.env.DB_HOST || 'http://remotemysql.com/',
        user            : process.env.DB_USER || 'VYQzR986qW',
        password        : process.env.DB_PASSWORD || 'GkIM2uFTKB',
        database        : process.env.DB_NAME || 'VYQzR986qW'
    }
}