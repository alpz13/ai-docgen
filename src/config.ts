import * as dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
    REPO_PATH: process.env.REPO_PATH || './repo'
};
