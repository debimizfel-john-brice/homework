import { useEffect, useState } from 'react';
import EmployeeCard from '../../Components/EmployeeCard/EmployeeCard';
import { EmployeeModel } from '../../Models/EmployeeModel';
import './Employees.css';
import EmployeesService from '../../Services/EmployeesService';
import { Link } from 'react-router-dom';
import NotifyService from '../../Services/NotifyService';

function Employees(): JSX.Element {

    const [employees, setEmployees] = useState<EmployeeModel[]>([]);

    useEffect(() => {
        EmployeesService.get_employees()
            .then(e => setEmployees(e))
            .catch(err => NotifyService.error(err.message));
    }, [])


    return (
        <div className="Employees">
            <Link to="/employees/add_employee">Add Employee</Link>
            {employees.map(e => <EmployeeCard employee={e} key={e.id} />)}
        </div>
    );
}

export default Employees;
