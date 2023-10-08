import axios from "axios";
import appConfig from "../Confi";
import EmployeeModel from "../Models/EmployeesModel";

class EmployeesService {
    public static async get_employees(): Promise<EmployeeModel[]> {
        return (await axios.get<EmployeeModel[]>(appConfig.employeesUrl)).data
    }
}

// static hace que get_employees sea un metodo de la *clase* y no de cada *objecto* de la clase
// EmployeeService.get_employees() en vez de (new EmployeeService()).get_employees()

export default EmployeesService;