import appConfig from '../../Confi';
import EmployeeModel from '../../Models/EmployeesModel';
import Card from '../Card/Card';
import './EmployeeCard.css';

function EmployeeCard({ employee }: { employee: EmployeeModel }): JSX.Element {
    return (
        <Card >
            <img src={appConfig.employessImageUrl+employee.imageName} alt="" className='employeeCardImage'/>
            <h4>{employee.firstName} {employee.lastName}</h4>
            <ul>
                <li>{employee.title}</li>
                <li>{employee.city}, {employee.country}</li>
                <li>{employee.birthDate.toString()}</li>
            </ul>

        </Card>
    );
}

export default EmployeeCard;
