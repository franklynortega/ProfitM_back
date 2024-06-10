import "dotenv/config";  
import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
//import cookieParser from "cookie-parser";
import apiRoutes from "./routes/auth_routes.js";
import apiProfit from "./routes/profit_routes.js";
// import apiHka from "./routes/api_hka_routes.js";
// import logger from "./helpers/logger.js";
//import hddserial from "hddserial"; 

const app = express();
//app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/api/v1/", apiRoutes);
app.use("/api/v1/p2k12/", apiProfit);


const PORT = process.env.PORT || 5000;
const SERVER_IP = process.env.SERVER_IP || '127.0.0.1';
const server = app.listen(PORT, SERVER_IP, () => {
  const address = server.address();
  console.log(`Servidor iniciado en http://${address.address}:${address.port}`);
});