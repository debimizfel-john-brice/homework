import { OkPacket } from "mysql";
import EmployeeModel from "../2-models/employee_model";
import dal from "../4-utils/dal";


async function getEmployees(): Promise<EmployeeModel[]> {
    const sql = `SELECT
                    EmployeeID AS id,
                    FirstName AS name,
                    LastName AS lastName,
                    Country AS country,
                    City AS city,
                    BirthDate AS dateOfBirth
                FROM employees`;
    const employees = await dal.execute(sql);
    return employees;
}

async function getEmployee(id: number): Promise<EmployeeModel> {
    const sql = `SELECT
                    EmployeeID AS id,
                    FirstName AS name,
                    LastName AS lastName,
                    Country AS country,
                    City AS city,
                    BirthDate AS dateOfBirth
                FROM employees
                WHERE EmployeeID = ${id}`;
    const employees = await dal.execute(sql);
    return employees[0];
}

async function addEmployee(employee: EmployeeModel): Promise<EmployeeModel> {
    const sql = `INSERT INTO employees(FirstName, LastName, Country, City, BirthDate)
                VALUES('${employee.name}', '${employee.lastName}', '${employee.country}', '${employee.city}', '${employee.dateOfBirth}')`;
    const info: OkPacket = await dal.execute(sql);
    employee.id = info.insertId;
    return employee;
}

async function updateEmployee(employee: EmployeeModel): Promise<EmployeeModel> {
    const sql = `UPDATE employees
                SET FirstName = '${employee.name}', LastName = '${employee.lastName}', Country = '${employee.country}', City = '${employee.city}', BirthDate = '${employee.dateOfBirth}'
                WHERE EmployeeID = ${employee.id}`;
    const info = await dal.execute(sql);

    return employee;
}

async function deleteEmployee(id: number): Promise<void> {
    const sql = `DELETE FROM employees WHERE EmployeeID = ${id}`;
    await dal.execute(sql);
}

export default {
    getEmployees,
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
}