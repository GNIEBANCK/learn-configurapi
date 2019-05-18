import {IEvent, ErrorResponse} from 'configurapi';
import {JsonResponse} from 'configurapi-handler-json';
import DataFilter from '../entities/dataFilter';
import DataManager from '../managers/dataManager';
import IData from '../interfaces/iData';

export async function listDataHandler(event:IEvent)
{
    let filter = DataFilter.fromParameters(event.params);
    let manager = new DataManager();
    let results:IData[];

    try
    {
        results = await manager.get(filter);
        event.response = new JsonResponse(results);
    }
    catch(e)
    {
        event.response = new ErrorResponse(e.message,500);        
    }
}