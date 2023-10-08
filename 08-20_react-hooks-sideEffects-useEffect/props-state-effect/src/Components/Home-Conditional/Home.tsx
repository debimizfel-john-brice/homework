import ShoesCard from '../ShoesCard-Props/ShoesCard';
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
            <div className='shoes_card'>
                <ShoesCard brand='Nike' image='https://picsum.photos/200/300' price={99.99} size={9.5} />
                <ShoesCard brand='Adidas' image='https://picsum.photos/200/300' price={79.99} size={8} />
                <ShoesCard brand='Puma' image='https://picsum.photos/200/300' price={64.99} size={7.5} />
                <ShoesCard brand='Reebok' image='https://picsum.photos/200/300' price={89.99} size={10} />
                <ShoesCard brand='New Balance' image='https://picsum.photos/200/300' price={74.99} size={9} />
            </div>
        </div>
    );
}

export default Home;
