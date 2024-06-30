import { conectar } from "../db/db.js"
import sql from "mssql";
import { genToken } from "../helpers/token_manager.js";
//import logger from "../modules/logger.js";

export const index = async (req, res) => {
    res.status(200).json({"ok" : "200"})
    console.log("ok");
};

export const login = async (req, res) => {   
    
    // nos conectamos a la base de datos correspondiente
    const pool = await conectar(process.env.DB_NAME_MPP)
    try {
        if(!pool)
            throw ('No fue posible conectarse a la base de datos')
            
        let result = await pool.request()
        .input('sCod_Usuario', sql.Char(6), req.body.user)
        .input('sPassword', sql.Char(15), req.body.pass)
        .output('sValidate', sql.Int)
        .execute('pAutenticarUsuario')
        if (pool) pool.close()
        if(result.output.sValidate === 0) 
            throw 'Usuario o Password no existe';
        // Generar Token JWT
        const token = genToken(req.body.user)

        logger.info(`Usuario "${req.body.user}" Autenticado`)
        let empresas = result.recordsets;
        res.status(200).json(
            {
                "validate" : result.output.sValidate,
                "empresas" :  empresas,
                "auth" : token
            }       
        )
        
    } catch (err) { // en caso de error lo capturamos
        logger.error(err)
        res.status(500).json({"msg" : err}) // lo retornamos a la ruta
    }
};