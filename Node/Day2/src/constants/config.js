import * as env from 'dotenv';
env.config();

const config = {
    port: process.env.PORT,
}

export default config;


