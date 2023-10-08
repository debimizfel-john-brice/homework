import './ShoesCard.css';

interface ShoesCardProps {
    brand: string,
    size: number,
    price: number,
    image: string
}

function ShoesCard(props: ShoesCardProps): JSX.Element {
    return (
        <div className="ShoesCard">
            <img src={props.image} alt="" />
            <h4>{props.brand}</h4>
            <ul>
                <li>{props.size}</li>
                <li>$ {props.price}</li>
            </ul>
        </div>
    );
}

export default ShoesCard;
