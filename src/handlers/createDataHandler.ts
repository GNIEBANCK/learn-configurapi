import {IEvent, ErrorResponse} from 'configurapi';
import {JsonResponse } from 'configurapi-handler-json';
import DataManager from '../managers/dataManager';
import Data from '../entities/data';

export async function createDataHandler(event:IEvent)
{
    let manager = new DataManager();
    let id:string;
    
    try
    {
        id = await manager.add(Data.fromJson(event.payload));
        event.response = new JsonResponse({id: id});
    }
    catch(e)
    {
        event.response = new ErrorResponse(e.message,500);        
    }
}