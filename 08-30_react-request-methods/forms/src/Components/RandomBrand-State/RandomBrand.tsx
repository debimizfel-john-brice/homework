import { useState } from 'react';
import './RandomBrand.css';

const brands = ["adidas", "nike", "new balance", "all star", "reebok"];

function RandomBrand(): JSX.Element {

    const [brand, setBrand] = useState("");

    setTimeout(() => {
        const index = Math.floor(Math.random() * brands.length);
        setBrand(brands[index]);
    }, 1000);

    return (
        <div className="RandomBrand">
            <span>{brand}</span>
        </div>
    );
}

export default RandomBrand;
