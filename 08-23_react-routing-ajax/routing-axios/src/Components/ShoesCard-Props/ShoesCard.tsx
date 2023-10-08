import Card from '../Card/Card';
import './ShoesCard.css';

interface ShoesCardProps {
    brand: string,
    size: number,
    price: number,
    image: string
}

function ShoesCard(props: ShoesCardProps): JSX.Element {
    return (
        <Card>
            <img src={props.image} alt="" className='shoesCardImage' />
            <h4>{props.brand}</h4>
            <ul>
                <li>{props.size}</li>
                <li>$ {props.price}</li>
            </ul>
        </Card>
    );
}

export default ShoesCard;
