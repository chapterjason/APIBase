
export function isObject(object: any){
    return !Array.isArray(object) && object !== null && typeof object === "object";
}