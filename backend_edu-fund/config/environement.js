require('dotenv').config();

export const port = process.env.PORT || 5000;
export const nodeEnv = process.env.NODE_ENV || 'development';
export const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5177';