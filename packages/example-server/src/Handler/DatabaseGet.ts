import {ResponseSuccess} from "../Response/ResponseSuccess";
import {ResponseError} from "../Response/ResponseError";
import {Logger, Path} from "@apibase/core";
import {DatabaseInterface} from "@apibase/database";

export function DatabaseGet(database: DatabaseInterface) {
    return async (request, response, next) => {
        if (request.method === 'GET') {
            const path = new Path(request.path);

            Logger.info('GET', path.toString());

            try {
                response.send(new ResponseSuccess(await database.get(path)));
            } catch (error) {
                response.status(500);
                response.send(new ResponseError(error.message));
            }
        } else {
            next();
        }
    }
}