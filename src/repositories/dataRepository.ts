import IData from '../interfaces/iData';
import IDataFilter from '../interfaces/iDataFilter';
import IDataRepository from '../interfaces/iDataRepository';
import IDataProvider from '../interfaces/iDataProvider';
import DataProviderFactory from './providers/dataProviderFactory';
import * as uuid from 'uuid/v4';

export default class DataRepository implements IDataRepository
{
    private dataProvider:IDataProvider;

    constructor(dataProvider?:IDataProvider)
    {
        this.dataProvider = dataProvider ||  DataProviderFactory.create();
    }

    async add(data:IData):Promise<string>
    {
        let id = uuid();
        data.id = id;
        await this.dataProvider.add(data);
        return id;
    }
    async getOne(id:string):Promise<IData>
    {
        return await this.dataProvider.getOne(id);
    }
    async get(filter?:IDataFilter):Promise<IData[]>
    {
        return await this.dataProvider.get();
    }
    async update(data:IData):Promise<void>
    {
        await this.dataProvider.update(data);
    }
    async delete(id:string):Promise<void>
    {
        await this.dataProvider.delete(id);
    }
    async resetTestDatabase():Promise<void>
    {
        await this.dataProvider.resetTestDatabase();
    }
}