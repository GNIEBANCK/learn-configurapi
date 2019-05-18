import IData from "../interfaces/iData";

export default class Data implements IData
{
    id:string;
    name:string;
    mail:string;

    constructor( id?:string,name?:string,mail?:string)
    {
        this.id = id;
        this.name = name;
        this.mail = mail;
    }

    public static fromJson(obj:any):IData
    {
        if(obj === undefined) return undefined;
        let result = new Data();
        Object.assign(result, obj);
        return result;   
    }

}