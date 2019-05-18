import IDataFilter from '../interfaces/iDataFilter';
export default class DataFilter implements IDataFilter {
    name: string;
    mail: string;

    constructor(mail?: string, name?: string) {
        this.mail = mail;
        this.name = name;
    }

    public static fromParameters(obj: any) {

        if (obj === undefined) return undefined;
        let result = new DataFilter(obj.mail,obj.name);
        return result;
    }
}