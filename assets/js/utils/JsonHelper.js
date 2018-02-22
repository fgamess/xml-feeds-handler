/**
 * class JsonHelper
 */
class JsonHelper {

    constructor() {

    }

    createJsonObject(jsonString){
        return JSON.parse(jsonString);
    }
}

export { JsonHelper }
