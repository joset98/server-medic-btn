// https://stackoverflow.com/questions/67688332/environment-variable-undefined-error-in-node-js

function init () {
    const dotenv = require('dotenv') 
    let dotenvResult;
    if (process.env.NODE_ENV !== 'production') 
        dotenvResult = dotenv.config();

    if (dotenvResult.error) {
        console.log(`ERROR WHILE READING ENV-VARS:${dotenvResult.error}`);
        throw dotenvResult.error;
    }
}

module.exports.initEnv = init;