import { Link, useParams } from 'react-router-dom';
import './Details.css';
import appConfig from '../../Confi';
import { useEffect, useState } from 'react';
import EmployeesService from '../../Services/EmployeesService';
import EmployeeModel from '../../Models/EmployeesModel';

function Details(): JSX.Element {

    const { employeeID } = useParams();
    const [employee, setEmployee] = useState<EmployeeModel>();

    useEffect(() => {
        EmployeesService.get_employee(employeeID!)
            .then(e => setEmployee(e))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="Details">
            {employee && <>
                <img src={appConfig.employessImageUrl + employee.imageName} alt="" className='employeeCardImage' />
                <h4>{employee.firstName} {employee.lastName}</h4>
                <ul>
                    <li>{employee.title}</li>
                    <li>{employee.city}, {employee.country}</li>
                    <li>{employee.birthDate.toString()}</li>
                </ul>
                <Link to="/employees">Back</Link>
            </>}

        </div>
    );
}

export default Details;
