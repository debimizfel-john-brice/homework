import './Footer.css';

function Footer(): JSX.Element {
    function show_alert() {
        alert("Deborah Mizarhi");
    }
    return (
        <div className="Footer">
            <div onClick={show_alert}>Copyright - by Deborah Mizrahi | {new Date().getFullYear()}</div>
        </div>
    );
}

export default Footer;
