import app from './app.js'
import sequelize from './database/database.js'
async function main() {
    try {
        await sequelize.sync();
        console.log("db is conected");

        app.listen(app.get('port'), (err)=>{
            if(err){
                console.error(`there was an error ${err}`)
            }else{
                console.log(`server is running on port ${app.get('port')}`);
                
            }
        });
    } catch (error) {
        console.error(`no se pudo conectar a la BD ${error}`)
    }
}
main();