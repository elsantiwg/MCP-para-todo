import dotenv from 'dotenv';
dotenv.config();

import { startServer } from './mcp/server';

startServer(3000);
