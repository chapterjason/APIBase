[@apibase/core](../README.md) > ["Collection/Map"](../modules/_collection_map_.md) > [Map](../classes/_collection_map_.map.md)

# Class: Map

## Type parameters
#### KeyType 
#### ValueType 
## Hierarchy

**Map**

## Index

### Constructors

* [constructor](_collection_map_.map.md#constructor)

### Properties

* [_keys](_collection_map_.map.md#_keys)
* [_values](_collection_map_.map.md#_values)

### Methods

* [__@iterator](_collection_map_.map.md#___iterator)
* [clear](_collection_map_.map.md#clear)
* [delete](_collection_map_.map.md#delete)
* [entries](_collection_map_.map.md#entries)
* [forEach](_collection_map_.map.md#foreach)
* [get](_collection_map_.map.md#get)
* [has](_collection_map_.map.md#has)
* [keys](_collection_map_.map.md#keys)
* [reverse](_collection_map_.map.md#reverse)
* [set](_collection_map_.map.md#set)
* [size](_collection_map_.map.md#size)
* [sort](_collection_map_.map.md#sort)
* [values](_collection_map_.map.md#values)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Map**(items?: * `IterableIterator`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>> &#124; `Array`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>>*): [Map](_collection_map_.map.md)

*Defined in [Collection/Map.ts:108](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L108)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` items |  `IterableIterator`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>> &#124; `Array`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>>|

**Returns:** [Map](_collection_map_.map.md)

___

## Properties

<a id="_keys"></a>

### `<Protected>` _keys

**● _keys**: *`KeyType`[]* =  []

*Defined in [Collection/Map.ts:107](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L107)*

___
<a id="_values"></a>

### `<Protected>` _values

**● _values**: *`ValueType`[]* =  []

*Defined in [Collection/Map.ts:108](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L108)*

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>>

*Defined in [Collection/Map.ts:177](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L177)*

**Returns:** `IterableIterator`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>>

___
<a id="clear"></a>

###  clear

▸ **clear**(): `void`

*Defined in [Collection/Map.ts:119](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L119)*

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(key: *`KeyType`*): `boolean`

*Defined in [Collection/Map.ts:124](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L124)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `KeyType` |

**Returns:** `boolean`

___
<a id="entries"></a>

###  entries

▸ **entries**(): `IterableIterator`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>>

*Defined in [Collection/Map.ts:136](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L136)*

**Returns:** `IterableIterator`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>>

___
<a id="foreach"></a>

###  forEach

▸ **forEach**(callback: *`function`*): `void`

*Defined in [Collection/Map.ts:140](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L140)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**(key: *`KeyType`*): `ValueType`

*Defined in [Collection/Map.ts:147](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L147)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `KeyType` |

**Returns:** `ValueType`

___
<a id="has"></a>

###  has

▸ **has**(key: *`KeyType`*): `boolean`

*Defined in [Collection/Map.ts:156](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L156)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `KeyType` |

**Returns:** `boolean`

___
<a id="keys"></a>

###  keys

▸ **keys**(): `IterableIterator`<`KeyType`>

*Defined in [Collection/Map.ts:160](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L160)*

**Returns:** `IterableIterator`<`KeyType`>

___
<a id="reverse"></a>

###  reverse

▸ **reverse**(): `this`

*Defined in [Collection/Map.ts:181](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L181)*

**Returns:** `this`

___
<a id="set"></a>

###  set

▸ **set**(key: *`KeyType`*, value: *`ValueType`*): `void`

*Defined in [Collection/Map.ts:164](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L164)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `KeyType` |
| value | `ValueType` |

**Returns:** `void`

___
<a id="size"></a>

###  size

▸ **size**(): `number`

*Defined in [Collection/Map.ts:169](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L169)*

**Returns:** `number`

___
<a id="sort"></a>

###  sort

▸ **sort**(compareFn?: *`function`*): [Map](_collection_map_.map.md)<`KeyType`, `ValueType`>

*Defined in [Collection/Map.ts:188](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L188)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` compareFn | `function` |

**Returns:** [Map](_collection_map_.map.md)<`KeyType`, `ValueType`>

___
<a id="values"></a>

###  values

▸ **values**(): `IterableIterator`<`ValueType`>

*Defined in [Collection/Map.ts:173](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/core/src/Collection/Map.ts#L173)*

**Returns:** `IterableIterator`<`ValueType`>

___

