import { ResourceNotFoundError } from "../2-models/client-errors";
import DataModel from "../2-models/data-model";
import dal from "../4-utils/dal";


// Get all ___
async function getAll____():Promise<DataModel[]>{

    const sql = "SELECT * FROM _____";
    const data = await dal.execute(sql);
    return data;

}

// Get one ___
async function getOne____(id:number):Promise<DataModel>{

    const sql = "SELECT * FROM _____ WHERE id = ?";

    const dataArr = await dal.execute(sql, [id]);

    const data = dataArr[0];
    if(!data ) throw new ResourceNotFoundError(id);

    return data;

}


// More functions


export default {
    getAll____,
    getOne____
}