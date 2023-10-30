import ShoesCard from '../../Components/ShoesCard-Props/ShoesCard';
import './Products.css';

function Products(): JSX.Element {
    return (
        <div className="Products">
            <ShoesCard brand='Nike' image='https://picsum.photos/200/300' price={99.99} size={9.5} />
            <ShoesCard brand='Adidas' image='https://picsum.photos/200/300' price={79.99} size={8} />
            <ShoesCard brand='Puma' image='https://picsum.photos/200/300' price={64.99} size={7.5} />
            <ShoesCard brand='Reebok' image='https://picsum.photos/200/300' price={89.99} size={10} />
            <ShoesCard brand='New Balance' image='https://picsum.photos/200/300' price={74.99} size={9} />
        </div>
    );
}

export default Products;
