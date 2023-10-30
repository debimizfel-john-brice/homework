class EmployeeModel {
    id: number;
    name: string;
    lastName: string;
    country: string;
    city: string;
    dateOfBirth: Date;

    constructor(employee: EmployeeModel) {
        this.id = employee.id;
        this.name = employee.name;
        this.lastName = employee.lastName;
        this.country = employee.country;
        this.city = employee.city;
        this.dateOfBirth = employee.dateOfBirth;
    }
}

export default EmployeeModel;