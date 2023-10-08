import { useEffect, useState } from 'react';
import './Categories.css';
import { CategoryModel } from '../../Models/CategoryModel';
import Categorieservice from '../../Services/CategoryService';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import NotifyService from '../../Services/NotifyService';

function Categories(): JSX.Element {

    const [categories, setCategories] = useState<CategoryModel[]>([]);

    useEffect(() => {
        Categorieservice.getCategories()
            .then(c => setCategories(c))
            .catch(err => NotifyService.error(err.message));
    }, []);

    return (
        <div className="Categories">
            {categories.map(c => <CategoryCard key={c.id} category={c} />)}
        </div>
    );
}

export default Categories;
