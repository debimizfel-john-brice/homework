import { useSelector } from 'react-redux';
import './Footer.css';
import { RootState } from '../../Redux/Store';

function Footer(): JSX.Element {
    function show_alert() {
        alert("Deborah Mizarhi");
    }

    const totalEmployees = useSelector((state: RootState) => state.employee.employeesList.length);

    return (
        <div className="Footer">
            <div onClick={show_alert}>Copyright - by Deborah Mizrahi | {new Date().getFullYear()}</div>
            <div>{totalEmployees}</div>
        </div>
    );
}

export default Footer;
