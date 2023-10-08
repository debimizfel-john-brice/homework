import { useSelector } from 'react-redux';
import './TotalEmployees.css';
import { RootState } from '../../Redux/Store';

function TotalEmployees(): JSX.Element {
    const totalEmployees = useSelector((state: RootState) => state.employee.employeesList.length);

    return (
        <div className="TotalEmployees">
            <div>{"Total Employees: " + totalEmployees}</div>

        </div>
    );
}

export default TotalEmployees;
