import mysql from "mysql";
import AppConfig from "./app_config";

// create a connection to the database
const connection = mysql.createPool({
    host: AppConfig.my_sql_host,
    database: AppConfig.my_sql_database,
    user: AppConfig.my_sql_user,
    password: AppConfig.my_sql_password
});

// Execute sql query:
function execute(sql: string): Promise<any> {
    return new Promise((resolve, reject) => {

        // Execute sql query:
        connection.query(sql, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export default {
    execute
}