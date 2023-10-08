import Youtube from '../Youtube/Youtube';
import './Home.css';

function Home(): JSX.Element {
    function is_first(): Boolean {
        const date = new Date();
        const day = date.getDate();
        return day === 1;
    }

    const shoes = [
        { id: 1, brand: 'Nike' },
        { id: 2, brand: 'Adidas' },
        { id: 3, brand: 'Puma' },
        { id: 4, brand: 'Reebok' },
        { id: 5, brand: 'Converse' }
    ]
    return (
        <div className="Home">
            {is_first() ? <p>Enjoy special discounts on kids' shoes this month for being the first day of the month! Don't miss out on this opportunity to grab stylish and comfortable footwear for your little ones.</p> : <p>Today is not the first of the month</p>}
            <Youtube></Youtube>
            {shoes.map(s => <li key={s.id}>{s.brand}</li>)}
        </div>
    );
}

export default Home;
