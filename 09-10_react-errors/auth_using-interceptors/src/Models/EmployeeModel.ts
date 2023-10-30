interface BaseEmployeeModel {
    firstName: string;
    lastName: string;
    title: string;
    country: string;
    city: string;
    birthDate: string;
}

export interface AddEmployeeModel extends BaseEmployeeModel {
    image: FileList;
}

export interface EmployeeModel extends BaseEmployeeModel {
    id: string;
    imageUrl: string;
}

export interface UpdateEmployeeModel extends AddEmployeeModel {
    id: string;
}