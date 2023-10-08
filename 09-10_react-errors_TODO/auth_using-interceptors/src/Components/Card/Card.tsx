import { ReactNode } from 'react';
import './Card.css';

interface CardProps{
    children: ReactNode;
    width?: number;
    height?: number;
}

// children sera lo que pongas dentro del Card
// Por ejemplo <Card><h1>Esto es un child</h1><Card>
// ReactNode es cualquier cosa que puede ir dentro de un Element. Como un component, un HTML element, o un string

function Card(props:CardProps): JSX.Element {
    return (
        <div className="Card" style={{width: props.width, height: props.height}}>
            {props.children}
        </div>
    );
}

export default Card;
