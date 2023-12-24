class DevConfig {

    // Server port:
    static port = 4000;

    // Server Url:
    static serverUrl = "http://localhost:" + this.port;

    // Database host:
    static my_sql_host = "localhost";

    // Database name:
    static my_sql_database = "ikea";

    // Database user:
    static my_sql_user = "root";

    // Database password:
    static my_sql_password = "";

    static isProduction = false;

}

class ProductionConfig {

    static port = 4040;
    static my_sql_host = "http://api-coffee-shop.com/" + this.port;
    static my_sql_database = "ikea";
    static my_sql_user = "root";
    static my_sql_password = "";
    static isProduction = true;

}

export default process.env.NODE_ENV === "production" ? ProductionConfig : DevConfig;

