import { useForm } from 'react-hook-form';
import Card from '../../Components/Card/Card';
import './AddEmployee.css';
import { cityValidation, countryValidation, firstNameValidation, lastNameValidation, titleValidation } from '../../FormValidation/EmployeeValidation';
import { AddEmployeeModel } from '../../Models/EmployeeModel';
import EmployeesService from '../../Services/EmployeesService';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotifyService from '../../Services/NotifyService';

function AddEmployee(): JSX.Element {
    const { register, handleSubmit, formState } = useForm<AddEmployeeModel>();
    const navigation = useNavigate();
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        setImageUrl(imageUrl); //?
    });

    async function save(employee: AddEmployeeModel) {
        try {
            await EmployeesService.add_employee(employee);
            NotifyService.success("Employee added");
            navigation("/employees");
        } catch (error: any) {
            NotifyService.error(error.message);
        }
    }

    return (
        <div className="AddEmployee">
            <Card width={300}>
                <form onSubmit={handleSubmit(save)}>
                    <h2>Add Employee</h2>
                    <div className='input'>
                        <label>First Name: </label>
                        <input type="text" {...register("firstName", firstNameValidation)} />
                        <span className="validation"> {formState.errors.firstName?.message} </span>
                    </div>
                    <div className='input'>
                        <label>Last Name: </label>
                        <input type="text" {...register("lastName", lastNameValidation)} />
                        <span className="validation"> {formState.errors.lastName?.message} </span>
                    </div>
                    <div className='input'>
                        <label>Title: </label>
                        <input type="text" {...register("title", titleValidation)} />
                        <span className="validation"> {formState.errors.title?.message} </span>
                    </div>
                    <div className='input'>
                        <label>Country: </label>
                        <input type="text" {...register("country", countryValidation)} />
                        <span className="validation"> {formState.errors.country?.message} </span>
                    </div>
                    <div className='input'>
                        <label>City: </label>
                        <input type="text" {...register("city", cityValidation)} />
                        <span className="validation"> {formState.errors.city?.message} </span>
                    </div>
                    <div className='input'>
                        <label>Birthdate: </label>
                        <input type="date" {...register("birthDate")} />
                    </div>
                    <div className='input'>
                        <label>Image: </label>
                        <input type="file" accept="image/*" {...register("image")} />
                        {imageUrl && <img src={imageUrl} width={60} height={60} />}
                    </div>

                    <button>Add</button>
                </form>
            </Card>
        </div>
    );
}

export default AddEmployee;
