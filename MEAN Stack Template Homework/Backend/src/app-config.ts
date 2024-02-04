class AppConfig {

    // Server Port:
    public port = 4000;

    //TODO MongoDB Connection String:
    public mongoDBConnectionString = "mongodb://127.0.0.1:27017/events";

}
const appConfig = new AppConfig();
export default appConfig;