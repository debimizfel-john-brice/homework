import { Link } from 'react-router-dom';
import { EmployeeModel } from '../../Models/EmployeeModel';
import Card from '../Card/Card';
import './EmployeeCard.css';

function EmployeeCard({ employee }: { employee: EmployeeModel }): JSX.Element {
    return (
        <div className='EmployeeCard'>
            <Link to={"/employees/details/" + employee.id}>
                <Card width={300} height={200}>
                    <img src={employee.imageUrl} alt="" className='employeeCardImage' />
                    <h4>{employee.firstName} {employee.lastName}</h4>
                    <ul>
                        <li>{employee.title}</li>
                        <li>{employee.city}, {employee.country}</li>
                        <li>{employee.birthDate}</li>
                    </ul>
                </Card>
            </Link>
        </div>
    );
}

export default EmployeeCard;
