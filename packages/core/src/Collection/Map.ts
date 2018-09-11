/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export type MapTupel<KeyType, ValueType> = [KeyType, ValueType];

export class MapTupelIterator<KeyType, ValueType> implements IterableIterator<MapTupel<KeyType, ValueType>> {

    protected pointer = 0;
    protected keys: KeyType[];
    protected values: ValueType[];

    constructor(keys: KeyType[], values: ValueType[]) {
        this.keys = keys;
        this.values = values;
    }

    public next(): IteratorResult<MapTupel<KeyType, ValueType>> {
        if (this.pointer < this.keys.length) {
            const index = this.pointer++;

            return {
                done: false,
                value: [this.keys[index], this.values[index]]
            }
        } else {
            return {
                done: true,
                value: null
            }
        }
    }

    [Symbol.iterator](): IterableIterator<MapTupel<KeyType, ValueType>> {
        return this;
    }
}


export class MapValueIterator<ValueType> implements IterableIterator<ValueType> {

    protected pointer = 0;
    protected values: ValueType[];

    constructor(values: ValueType[]) {
        this.values = values;
    }

    public next(): IteratorResult<ValueType> {
        if (this.pointer < this.values.length) {
            const index = this.pointer++;

            return {
                done: false,
                value: this.values[index]
            }
        } else {
            return {
                done: true,
                value: null
            }
        }
    }

    [Symbol.iterator](): IterableIterator<ValueType> {
        return this;
    }
}

export class MapKeyIterator<KeyType> implements IterableIterator<KeyType> {

    protected pointer = 0;
    protected keys: KeyType[];

    constructor(keys: KeyType[]) {
        this.keys = keys;
    }

    public next(): IteratorResult<KeyType> {
        if (this.pointer < this.keys.length) {
            const index = this.pointer++;

            return {
                done: false,
                value: this.keys[index]
            }
        } else {
            return {
                done: true,
                value: null
            }
        }
    }

    [Symbol.iterator](): IterableIterator<KeyType> {
        return this;
    }
}

export class Map<KeyType, ValueType> {

    protected _keys: KeyType[] = [];
    protected _values: ValueType[] = [];

    public constructor(items?: IterableIterator<MapTupel<KeyType, ValueType>> | Array<MapTupel<KeyType, ValueType>>) {
        if (items) {
            for (let pair of items) {
                console.log(pair);
                this._keys.push(pair[0]);
                this._values.push(pair[1]);
            }
        }
    }

    public clear(): void {
        this._keys = [];
        this._values = [];
    }

    public delete(key: KeyType): boolean {
        const index = this._keys.indexOf(key);
        if (index > -1) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
        }

        return false;
    }

    public entries(): IterableIterator<MapTupel<KeyType, ValueType>> {
        return new MapTupelIterator<KeyType, ValueType>(this._keys, this._values);
    }

    public forEach(callback: (value: ValueType, key: KeyType, map: Map<KeyType, ValueType>) => void): void {
        const length = this._keys.length;
        for (let index = 0; index < length; index++) {
            callback(this._values[index], this._keys[index], this);
        }
    }

    public get(key: KeyType): ValueType {
        const index = this._keys.indexOf(key);
        if (index > -1) {
            return this._values[index];
        }
    }

    public has(key: KeyType): boolean {
        return this._keys.indexOf(key) > -1;
    }

    public keys(): IterableIterator<KeyType> {
        return new MapKeyIterator<KeyType>(this._keys);
    }

    public set(key: KeyType, value: ValueType) {
        this._keys.push(key);
        this._values.push(value);
    }

    public size() {
        return this._keys.length;
    }

    public values(): IterableIterator<ValueType> {
        return new MapValueIterator<ValueType>(this._values);
    }

    public [Symbol.iterator](): IterableIterator<MapTupel<KeyType, ValueType>> {
        return this.entries();
    }

    public [Symbol.toStringTag](): string {
        return 'Map';
    }

    public reverse() {
        this._keys = this._keys.reverse();
        this._values = this._values.reverse();

        return this;
    }

    public sort(compareFn?: (a: MapTupel<KeyType, ValueType>, b: MapTupel<KeyType, ValueType>) => number) {
        return new Map<KeyType, ValueType>([...this.entries()].sort(compareFn));
    }

}