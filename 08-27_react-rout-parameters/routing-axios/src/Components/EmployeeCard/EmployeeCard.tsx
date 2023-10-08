import { Link } from 'react-router-dom';
import appConfig from '../../Confi';
import EmployeeModel from '../../Models/EmployeesModel';
import Card from '../Card/Card';
import './EmployeeCard.css';

function EmployeeCard({ employee }: { employee: EmployeeModel }): JSX.Element {
    return (
        <div className='EmployeeCard'>
            <Link to={"/employees/details/" + employee.id}>
                <Card >
                    <img src={appConfig.employessImageUrl + employee.imageName} alt="" className='employeeCardImage' />
                    <h4>{employee.firstName} {employee.lastName}</h4>
                    <ul>
                        <li>{employee.title}</li>
                        <li>{employee.city}, {employee.country}</li>
                        <li>{employee.birthDate.toString()}</li>
                    </ul>
                </Card>
            </Link>
        </div>
    );
}

export default EmployeeCard;
