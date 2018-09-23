import {ResponseSuccess} from "../Response/ResponseSuccess";
import {ResponseError} from "../Response/ResponseError";
import {Logger, Path} from "@apibase/core";
import {DatabaseInterface} from "@apibase/database";

export function DatabaseDelete(database: DatabaseInterface, save: () => Promise<void>) {
    return async (request, response, next) => {
        if (request.method === 'DELETE') {
            const path = new Path(request.path);

            Logger.info('DELETE', path.toString());

            try {
                response.send(new ResponseSuccess(await database.delete(path)));
                await save();
            } catch (error) {
                response.status(500);
                response.send(new ResponseError(error.message));
            }
        } else {
            next();
        }
    }
}