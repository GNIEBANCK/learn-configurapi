import {IEvent, ErrorResponse} from 'configurapi';
import DataManager from '../managers/dataManager';

export async function resetTestDatabaseHandler(event:IEvent)
{
    let manager = new DataManager();

    try
    {
        await manager.resetTestDatabase();
        event.response.statusCode = 204;
    }
    catch(e)
    {
        event.response = new ErrorResponse(e.message,500);        
    }
}