import IData from '../interfaces/iData';
import IDataFilter from '../interfaces/iDataFilter';
import IDataManager from '../interfaces/iDataManager';
import IDataRepository from '../interfaces/iDataRepository';
import DataRepository from '../repositories/dataRepository';

export default class DataManager implements IDataManager
{
    private dataRepository:IDataRepository;

    constructor(dataRepository?:IDataRepository)
    {
        this.dataRepository = dataRepository || new DataRepository();        
    }
    
    async add(data:IData):Promise<string>
    {
        let id = await this.dataRepository.add(data);
        return id;        
    }
    async getOne(id:string):Promise<IData>
    {
        return await this.dataRepository.getOne(id);
    }
    async get(filter?:IDataFilter):Promise<IData[]>
    {
        return await this.dataRepository.get(filter);
    }
    async update(data:IData):Promise<void>
    {
        await this.dataRepository.update(data);
    }
    async delete(id:string):Promise<void>
    {
        await this.dataRepository.delete(id);
    }
    async resetTestDatabase():Promise<void>
    {
        await this.dataRepository.resetTestDatabase();
    }
}