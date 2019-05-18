import Config from '../../config';
import db from './fileDB';
import IDataProvider from '../../interfaces/iDataProvider';
import IData from '../../interfaces/iData';
import IDataFilter from '../../interfaces/iDataFilter';
import Data from '../../entities/data';
import { DeltaConverter } from './deltaConverter';
import * as fileAsync from 'lowdb/lib/storages/file-async';

export default class FileDataProvider extends DeltaConverter implements IDataProvider
{
	private tableName = Config.TABLE_NAME_DATA;

	constructor() {
		super();
		let collection = {};
		collection[this.tableName] = [];
		db.defaults(collection, {storage:fileAsync}).write();
	}

	async add(data: IData) : Promise<void> {
		 await db.get(this.tableName).push(data).write();
	}

	async getOne(id:string) : Promise<IData> {
		let json = await db.get(this.tableName).find({id: id}).value();
		return Data.fromJson(json);
	}

	async get(filter: IDataFilter = undefined) : Promise<IData[]> {
		let objs:any;
		let orgIds:string[] = undefined;
		let roles:string[] = undefined;
		let adjustedRoles:string[] = [];
		
	    objs = await db.get(this.tableName).value();
	
		let result:IData[] = [];
		for (let obj of objs) {
			result.push(Data.fromJson(obj));
		}
		return result;
	}
	
	async update(data:IData) : Promise<void> {
		await db.get(this.tableName).find({id: data.id}).assign(this.toDelta(data)).write();
	}

	async delete(id:string) : Promise<void> {
		await db.get(this.tableName).remove({id: id}).write();
	}

	async resetTestDatabase():Promise<void>
	{
		await this.deleteAll();
	}
	
	private async deleteAll(): Promise<void>
	{
		db.setState({});
	}

    /*
	private toQuery(filter: IUserFilter): object {
		let query:any = {};

		for (let property in filter) { 
			if(filter[property] !== undefined) {
				query[property] = filter[property];
			}
		}

		return query;
    }
    */   
}

