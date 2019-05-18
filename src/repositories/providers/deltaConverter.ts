export class DeltaConverter {
    toDelta(obj:object): any {
        let result = {};

        for(let properties in obj) {
            if(obj[properties]!==undefined) {
                result[properties] = obj[properties];
            }
        }
        return result;
    }

    setUpdateExpression(obj:object, item:object): any {
        let updateExpressionSTR = "set";
        let expressionAttributeNamesOBJ = {};
        let expressionAttributeValuesOBJ = {};

        let firstProperty = true;
        for (let property in item) {
            if (item[property] !== undefined && property !== 'id') {
                // update Expression STR
                if (firstProperty) { firstProperty = false; }
                else {updateExpressionSTR = updateExpressionSTR+",";}
                updateExpressionSTR = updateExpressionSTR + " " + `#${property}` + ` = :${property}`;
                // expression Attribute Names OBJ
                expressionAttributeNamesOBJ[`#${property}`] = property;
                // expression Attribute Values OBJ
                expressionAttributeValuesOBJ[`:${property}`] = item[property];
            }
        }

        obj['UpdateExpression'] = updateExpressionSTR;
        obj['ExpressionAttributeNames'] = expressionAttributeNamesOBJ;
        obj['ExpressionAttributeValues'] = expressionAttributeValuesOBJ;
        obj['ReturnValues'] = "UPDATED_NEW";
    }
}