export declare type MapTupel<KeyType, ValueType> = [KeyType, ValueType];
export declare class MapTupelIterator<KeyType, ValueType> implements IterableIterator<MapTupel<KeyType, ValueType>> {
    protected pointer: number;
    protected keys: KeyType[];
    protected values: ValueType[];
    constructor(keys: KeyType[], values: ValueType[]);
    next(): IteratorResult<MapTupel<KeyType, ValueType>>;
    [Symbol.iterator](): IterableIterator<MapTupel<KeyType, ValueType>>;
}
export declare class MapValueIterator<ValueType> implements IterableIterator<ValueType> {
    protected pointer: number;
    protected values: ValueType[];
    constructor(values: ValueType[]);
    next(): IteratorResult<ValueType>;
    [Symbol.iterator](): IterableIterator<ValueType>;
}
export declare class MapKeyIterator<KeyType> implements IterableIterator<KeyType> {
    protected pointer: number;
    protected keys: KeyType[];
    constructor(keys: KeyType[]);
    next(): IteratorResult<KeyType>;
    [Symbol.iterator](): IterableIterator<KeyType>;
}
export declare class Map<KeyType, ValueType> {
    protected _keys: KeyType[];
    protected _values: ValueType[];
    constructor(items?: IterableIterator<MapTupel<KeyType, ValueType>> | Array<MapTupel<KeyType, ValueType>>);
    clear(): void;
    delete(key: KeyType): boolean;
    entries(): IterableIterator<MapTupel<KeyType, ValueType>>;
    forEach(callback: (value: ValueType, key: KeyType, map: Map<KeyType, ValueType>) => void): void;
    get(key: KeyType): ValueType;
    has(key: KeyType): boolean;
    keys(): IterableIterator<KeyType>;
    set(key: KeyType, value: ValueType): void;
    size(): number;
    values(): IterableIterator<ValueType>;
    [Symbol.iterator](): IterableIterator<MapTupel<KeyType, ValueType>>;
    reverse(): this;
    sort(compareFn?: (a: MapTupel<KeyType, ValueType>, b: MapTupel<KeyType, ValueType>) => number): Map<KeyType, ValueType>;
}
