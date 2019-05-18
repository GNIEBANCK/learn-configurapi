export default class Config
{
    //database info
    public static DATA_PROVIDER_LOWDB = 'lowdb';
    public static DATA_PROVIDER = process.env.DATA_PROVIDER 
        || Config.DATA_PROVIDER_LOWDB;        
    public static TABLE_NAME_DATA = 'data-table';
}