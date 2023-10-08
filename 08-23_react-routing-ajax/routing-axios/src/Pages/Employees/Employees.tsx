import { useEffect, useState } from 'react';
import EmployeeCard from '../../Components/EmployeeCard/EmployeeCard';
import EmployeeModel from '../../Models/EmployeesModel';
import './Employees.css';
import EmployeesService from '../../Services/EmployeesService';

function Employees(): JSX.Element {

    const [employees, setEmployees] = useState<EmployeeModel[]>([]);

    useEffect(() => {
        EmployeesService.get_employees()
            .then(e => setEmployees(e))
            .catch(err => alert(err.message));
    }, [])


    return (
        <div className="Employees">
            {employees.map(e => <EmployeeCard employee={e} key={e.id}/>)}

        </div>
    );
}

export default Employees;
