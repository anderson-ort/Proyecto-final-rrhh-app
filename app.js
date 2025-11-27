import config from './src/config/config.js';
import sequelize from './src/databases/mysql.cnx.js';
import server from './src/server.js';

//const runServer = async () => {
 // try {
 //   await sequelize.authenticate();
   // console.log(`Conexión a la base de datos MySQL exitosa. ${config.MYSQL_HOST}`);
    //server.listen(
    //  config.SERVER_PORT,
     // config.SERVER_HOST, 
     // () => {
     // console.log(`Servidor escuchando en http:// ${config.SERVER_HOST}:${config.SERVER_PORT}`);
   // });
  //} catch (error) {
   // console.error(
    //  `No se pudo conectar a la base de datos MySQL: ${config.SERVER_HOST}`,
    //  error.message,
    //);
 // }
//};

//runServer();

//export default server;


// Función auto-invocada (IIFE) para manejar la lógica asíncrona de conexión a la DB.
// Vercel ejecuta este código durante el 'cold start' de la función serverless.
(async () => {
  try {
    await sequelize.authenticate();
    console.log(`[Vercel Init] Conexión a la base de datos MySQL exitosa.`);
  } catch (error) {
    console.error(
      `[Vercel Init Error] No se pudo conectar a la base de datos MySQL: ${config.MYSQL_HOST}`,
      error.message,
    );
    // Nota: La función serverless aún puede desplegarse si la conexión falla,
    // pero fallará al intentar acceder a las rutas que dependen de la DB.
  }
})();

// Esta es la parte CRÍTICA para Vercel:
// Se exporta la instancia de la aplicación Express (`server`) directamente.
// Vercel toma esta instancia y la usa como manejador de solicitudes HTTP.
export default server;
