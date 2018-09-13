import {Path} from "@apibase/core";

interface DatabaseResponse<Type> {
    success: boolean;
    result: Type;
}

export class ClientDatabase {

    protected service: string;

    public constructor(service: string) {
        this.service = service;
    }

    // async delete(path: Path | string | string[]): Promise<boolean> {
    //     return new Promise<boolean>(async (resolve, reject) => {
    //         try {
    //             const response: AxiosResponse<DatabaseResponse<boolean>> = await Axios.delete(this.getService(path));
    //             const data = response.data;
    //             if(data.success){
    //                 resolve(data.result)
    //             }else{
    //                 reject(data.result);
    //             }
    //         }catch(error){
    //             Logger.error(error);
    //             reject(false);
    //         }
    //     });
    // }
    //
    // async set(path: Path | string | string[], value: any): Promise<boolean> {
    //     return new Promise<boolean>(async (resolve, reject) => {
    //         try {
    //             const response: AxiosResponse<DatabaseResponse<boolean>> = await Axios.put(this.getService(path), value);
    //             const data = response.data;
    //             if(data.success){
    //                 resolve(data.result)
    //             }else{
    //                 reject(data.result);
    //             }
    //         }catch(error){
    //             Logger.error(error);
    //             reject(false);
    //         }
    //     });
    // }
    //
    // async get<T>(path: Path | string | string[]): Promise<T> {
    //     return new Promise<T>(async (resolve, reject) => {
    //         try {
    //             const response: AxiosResponse<DatabaseResponse<T>> = await Axios.get(this.getService(path));
    //             const data = response.data;
    //             if(data.success){
    //                 resolve(data.result)
    //             }else{
    //                 reject(data.result);
    //             }
    //         }catch(error){
    //             Logger.error(error);
    //             reject(false);
    //         }
    //     });
    // }
    //
    // reference<ReferenceType = any>(path: Path | string | string[]): ReferenceInterface<Promise<ReferenceType>> {
    //     return new Reference(this, this.get(path));
    // }
    //
    // collection<ReferenceType = any>(path: Path | string | string[]): CollectionReferenceInterface<ReferenceType> {
    //
    // }

    protected getService(path: Path | string | string[]) {
        return this.service.replace(/[\/]*$/m, '') + path.toString();
    }

}