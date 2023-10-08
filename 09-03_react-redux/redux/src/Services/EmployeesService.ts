import axios from "axios";
import appConfig from "../Config";
import { AddEmployeeModel, EmployeeModel, UpdateEmployeeModel } from "../Models/EmployeeModel";
import { store } from "../Redux/Store";
import { addEmployee, deleteEmployee, updateEmployee, updateEmployeeSlice as updateEmployees } from "../Redux/EmployeeSlice";

class EmployeesService {
    public static async get_employees(): Promise<EmployeeModel[]> {
        let employees = store.getState().employee.employeesList;

        if (employees.length) {
            return employees;
        }

        employees = (await axios.get<EmployeeModel[]>(appConfig.employeesUrl)).data;
        store.dispatch(updateEmployees(employees));
        return employees;

    }

    public static async get_employee(id: string): Promise<EmployeeModel> {
        const employees = store.getState().employee.employeesList;
        const employee = employees.find(e => e.id === id);

        if (employee) {
            return employee;
        }

        return (await axios.get<EmployeeModel>(appConfig.employeesUrl + id)).data
    }

    public static async add_employee(employee: AddEmployeeModel) {

        const formData = new FormData();
        formData.append("firstName", employee.firstName);
        formData.append("lastName", employee.lastName);
        formData.append("birthDate", employee.birthDate);
        formData.append("city", employee.city);
        formData.append("country", employee.country);
        formData.append("title", employee.title);
        formData.append("image", employee.image[0]);

        const newEmployee = (await axios.post<EmployeeModel>(appConfig.employeesUrl, formData)).data;
        store.dispatch(addEmployee(newEmployee));
    }

    public static async update_employee(employee: UpdateEmployeeModel) {

        const formData = new FormData();
        formData.append("firstName", employee.firstName);
        formData.append("lastName", employee.lastName);
        formData.append("birthDate", employee.birthDate);
        formData.append("city", employee.city);
        formData.append("country", employee.country);
        formData.append("title", employee.title);
        formData.append("image", employee.image[0]);

        const employeeUpdated = (await axios.put<EmployeeModel>(appConfig.employeesUrl + employee.id, formData)).data;
        store.dispatch(updateEmployee(employeeUpdated));
    }

    public static async delete_employee(id: string) {
        await axios.delete<void>(appConfig.employeesUrl + id);
        store.dispatch(deleteEmployee(id));
    }
}

// static hace que get_employees sea un metodo de la *clase* y no de cada *objecto* de la clase
// EmployeeService.get_employees() en vez de (new EmployeeService()).get_employees()

export default EmployeesService;