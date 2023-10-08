import { Link } from 'react-router-dom';
import { CategoryModel } from '../../Models/CategoryModel';
import Card from '../Card/Card';
import './CategoryCard.css';

function CategoryCard({ category }: { category: CategoryModel }): JSX.Element {
    return (
        <div className='CategoryCard'>
            <Link to={"/categories/details/" + category.id}>
                <Card width={300} height={200}>
                    <img src={category.imageUrl} alt={category.name} className='categoryCardImage' />
                    <h4>{category.name}</h4>
                    {category.description}
                </Card>
            </Link>
        </div>
    );
}

export default CategoryCard;
