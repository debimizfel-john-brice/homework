import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import "./List.css";
import dataService from "../../../Services/DataService";
import CategoryModel from "../../../Models/CategoryModel";
import notifyService from "../../../Services/NotifyService";
import ProductModel from "../../../Models/ProductModel";

function List(): JSX.Element {

    const [categories, setCategories] = useState<CategoryModel[]>([]);
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        dataService.getAllCategories()
        .then( dbCategories => setCategories(dbCategories))
        .catch( err => notifyService.error(err))
    },[]);


    const loadProducts = async( e:ChangeEvent<HTMLSelectElement> ) => {
        const id = +e.target.value;
        try {
            const dbProducts = await dataService.getProductsByCategory(id);
            setProducts(dbProducts);
        } catch (error) {
            notifyService.error(error);
        }
    }

    return (
        <div className="List">
			
            <div className="select-wrap">
                <select onChange={loadProducts}>
                    <option>Please select Category...</option>
                    { categories.map(c => <option key={c.id} value={c.id}>{c.name}</option> ) }
                </select>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Prduction Time</th>
                        <th>Expiry Time</th>
                        <th>Category ID</th>
                        <th>Price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map( p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{new Date(p.productionTime).toLocaleString()}</td>
                            <td>{new Date(p.expiryTime).toLocaleDateString()}</td>
                            <td>{p.categoryId}</td>
                            <td>{p.price}</td>
                            <td>❌</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );


}

export default List;
