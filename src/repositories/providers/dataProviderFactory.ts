import Config from '../../config';
import IDataProvider from '../../interfaces/iDataProvider';
import FileDataProvider from './fileDataProvider';

export default class DataProviderFactory{
    static create():IDataProvider
    {
        if(Config.DATA_PROVIDER === Config.DATA_PROVIDER_LOWDB)
        {
            return new FileDataProvider();
        }
    }
}