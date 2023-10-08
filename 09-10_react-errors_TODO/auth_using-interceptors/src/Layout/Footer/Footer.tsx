import './Footer.css';
import TotalEmployees from '../../Components/TotalEmployees/TotalEmployees';

function Footer(): JSX.Element {
    function show_alert() {
        alert("Deborah Mizarhi");
    }


    return (
        <div className="Footer">
            <div onClick={show_alert}>Copyright - by Deborah Mizrahi | {new Date().getFullYear()}</div>
            <TotalEmployees />
        </div>
    );
}

export default Footer;
