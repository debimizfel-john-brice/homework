import { Link, useNavigate, useParams } from 'react-router-dom';
import './EditEmployee.css';
import { UpdateEmployeeModel } from '../../Models/EmployeeModel';
import { useForm } from 'react-hook-form';
import EmployeesService from '../../Services/EmployeesService';
import { cityValidation, countryValidation, firstNameValidation, lastNameValidation, titleValidation } from '../../FormValidation/EmployeeValidation';
import Card from '../../Components/Card/Card';
import { useEffect, useState } from 'react';
import NotifyService from '../../Services/NotifyService';

function EditEmployee(): JSX.Element {
    const { register, handleSubmit, formState, setValue } = useForm<UpdateEmployeeModel>();
    const navigation = useNavigate();
    const [imageUrl, setImageUrl] = useState("");
    const { employeeID } = useParams();

    useEffect(() => {
        EmployeesService.get_employee(employeeID!)
            .then(employee => {
                setValue("id", employee.id);
                setValue("firstName", employee.firstName);
                setValue("lastName", employee.lastName);
                setValue("title", employee.title);
                setValue("country", employee.country);
                setValue("city", employee.city);
                setValue("birthDate", employee.birthDate);
                setImageUrl(employee.imageUrl);
            })
            .catch(
                error => {
                    NotifyService.error(error.message);
                }
            );
    });

    async function update(employee: UpdateEmployeeModel) {
        try {
            await EmployeesService.update_employee(employee);
            NotifyService.success("Employee updated");
            navigation("/employees");
        } catch (error: any) {
            NotifyService.error(error.message);
        }
    }

    return (
        <div className="EditEmployee">
            <Card width={300}>
                <form onSubmit={handleSubmit(update)}>
                    <h2>Edit Employee</h2>
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

                    <button>Edit</button>
                    <Link to={"/employees/details/" + employeeID}>Back</Link>

                </form>
            </Card>
        </div>
    );
}

export default EditEmployee;
