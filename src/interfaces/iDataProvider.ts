import IData from './iData';
import IDataFilter from './iDataFilter';
export default interface IDataProvider
{    
    add(data:IData):Promise<void>;
    getOne(id:string):Promise<IData>;
    get(filter?:IDataFilter):Promise<IData[]>
    update(data:IData):Promise<void>;
    delete(id:string):Promise<void>;    
    resetTestDatabase():Promise<void>;
}