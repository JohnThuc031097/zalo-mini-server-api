const env = process.env.NODE_ENV || 'development';
const config = {
    development: {
        MONGODB_URL: process.env.MONGODB_URL,
        ZALO_APP_ID: process.env.ZALO_APP_ID,
        MINI_APP_ID: process.env.MINI_APP_ID,
        OA_TOKEN: process.env.OA_TOKEN,
        SERVER_AUTH: process.env.SERVER_AUTH
    },
    production: {
        MONGODB_URL: process.env.MONGODB_URL,
        ZALO_APP_ID: process.env.ZALO_APP_ID,
        MINI_APP_ID: process.env.MINI_APP_ID,
        OA_TOKEN: process.env.OA_TOKEN,
        SERVER_AUTH: process.env.SERVER_AUTH
    }
}

module.exports = config[env];