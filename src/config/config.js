import dotenv from 'dotenv';

dotenv.config();

const {
  MYSQL_DB,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_HOST,
  MYSQL_PORT,
  DIALECT,
//  SERVER_PORT,
//  SERVER_HOST,
  SUPABASE_URL,
  SUPABASE_API_KEY,
} = process.env;

const HOST = process.env.HOST || "0.0.0.0"
const PORT =  process.env.PORT || 3000
  
const config = {
  MYSQL_DB,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_HOST,
  MYSQL_PORT,
  DIALECT,
  SERVER_PORT:PORT,
  SERVER_HOST:HOST,
  SUPABASE_URL,
  SUPABASE_API_KEY,
};

export default config;
