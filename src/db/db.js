import sql from "mssql";
//import  logger  from "../modules/logger.js";
const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    server: process.env.SERVER_NAME,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
    //   encrypt: true, // for azure
      trustServerCertificate: true// change to true for local dev / self-signed certs
    }
  }
  
  export async function conectar(DB) {
   try {
      sqlConfig.database = DB
      let sqlConn = new sql.ConnectionPool(sqlConfig);
      await sqlConn.connect();
      return sqlConn;
   } 
   catch (err) {
    sql.close();
      return err;
   }
  }

  export async function db_connect (DB) {
    if(DB){
      sqlConfig.database = DB;
    }
      try {
          const pool = sql.connect(sqlConfig)
          return pool
      } catch (error) {
          logger.error(error)
          return false
      }
  }
  export default conectar;