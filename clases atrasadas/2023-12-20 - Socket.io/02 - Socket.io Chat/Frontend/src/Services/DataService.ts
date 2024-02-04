import axios from "axios";
import DataModel from "../Models/DataModel";
import appConfig from "../Utils/Config";

class DataService{

    public async getAll____():Promise<DataModel[]>{
        const response = await axios.get<DataModel[]>( appConfig.dataUrl );
        const data = response.data;
        return data;
    }
    
    public async getOne____(id:number):Promise<DataModel>{
        const response = await axios.get<DataModel>( appConfig.dataUrl + id );
        const data = response.data;
        return data;
    }

}
const dataService = new DataService();
export default dataService;