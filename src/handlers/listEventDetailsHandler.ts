import {IEvent} from 'configurapi';
import {JsonResponse} from 'configurapi-handler-json';

export async function listEventDetailsHandler(event:IEvent)
{
    let details = Object.assign({},event);
    event.response = new JsonResponse(details);
    return this.continue();    
}