class Config {
    public employeesUrl = "http://localhost:3030/api/employees/";
    public sigup = "http://localhost:3030/api/register/";
    public login = "";
    public categories = "http://localhost:3030/api/categories/";
}

const appConfig = new Config();
export default appConfig;