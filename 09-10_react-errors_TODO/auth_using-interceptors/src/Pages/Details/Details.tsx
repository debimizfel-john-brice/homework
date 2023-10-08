import { Link, useNavigate, useParams } from 'react-router-dom';
import './Details.css';
import { useEffect, useState } from 'react';
import EmployeesService from '../../Services/EmployeesService';
import { EmployeeModel } from '../../Models/EmployeeModel';

function Details(): JSX.Element {

    const { employeeID } = useParams();
    const [employee, setEmployee] = useState<EmployeeModel>();

    useEffect(() => {
        EmployeesService.get_employee(employeeID!)
            .then(e => setEmployee(e))
            .catch(err => alert(err.message));
    }, []);

    const navigation = useNavigate();

    async function delete_employee() {
        try {
            await EmployeesService.delete_employee(employeeID!);
            alert("Employee deleted");
            navigation("/employees");
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <div className="Details">
            {employee && <>
                <img src={employee.imageUrl} alt="" className='employeeCardImage' />
                <h4>{employee.firstName} {employee.lastName}</h4>
                <ul>
                    <li>{employee.title}</li>
                    <li>{employee.city}, {employee.country}</li>
                    <li>{employee.birthDate}</li>
                </ul>
                <Link to="/employees">Back</Link>
            </>}
            <Link to={"/employees/edit_employee/" + employeeID}>Edit Employee</Link>
            <button onClick={delete_employee}>Delete</button>
        </div>
    );
}

export default Details;
