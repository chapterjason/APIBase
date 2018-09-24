import {Logger, Map, Path} from "@apibase/core";
import {ChangeInterface, DatabaseInterface} from "@apibase/database";
import {ResponseSuccess} from "../Response/ResponseSuccess";
import {ResponseError} from "../Response/ResponseError";
import {convertToTupelArray} from "../Database";

export function DatabaseSync(database: DatabaseInterface, save: () => Promise<void>) {
    return async (request, response, next) => {
        if (request.method === 'POST') {
            const path = new Path(request.path);
            Logger.info('SYNC', path.toString());

            try {
                if (Array.isArray(request.body)) {
                    const items = convertToTupelArray(request.body);
                    const changes = new Map<string, ChangeInterface>(items);
                    changes.forEach(data => {
                        Logger.debug('SYNC', data.getTimestamp(), data['type'], data.getPath());
                    });
                    await database.applyChanges(changes);
                }
                response.send(new ResponseSuccess(await database.get('/')));
                await save();
            } catch (error) {
                response.status(500);
                response.send(new ResponseError(error));
            }
        } else {
            next();
        }
    }
}