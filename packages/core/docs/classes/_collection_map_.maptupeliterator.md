[@apibase/core](../README.md) > ["Collection/Map"](../modules/_collection_map_.md) > [MapTupelIterator](../classes/_collection_map_.maptupeliterator.md)

# Class: MapTupelIterator

## Type parameters
#### KeyType 
#### ValueType 
## Hierarchy

**MapTupelIterator**

## Implements

* `IterableIterator`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>>

## Index

### Constructors

* [constructor](_collection_map_.maptupeliterator.md#constructor)

### Properties

* [keys](_collection_map_.maptupeliterator.md#keys)
* [pointer](_collection_map_.maptupeliterator.md#pointer)
* [values](_collection_map_.maptupeliterator.md#values)

### Methods

* [__@iterator](_collection_map_.maptupeliterator.md#___iterator)
* [next](_collection_map_.maptupeliterator.md#next)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MapTupelIterator**(keys: *`KeyType`[]*, values: *`ValueType`[]*): [MapTupelIterator](_collection_map_.maptupeliterator.md)

*Defined in [Collection/Map.ts:16](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/core/src/Collection/Map.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| keys | `KeyType`[] |
| values | `ValueType`[] |

**Returns:** [MapTupelIterator](_collection_map_.maptupeliterator.md)

___

## Properties

<a id="keys"></a>

### `<Protected>` keys

**● keys**: *`KeyType`[]*

*Defined in [Collection/Map.ts:15](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/core/src/Collection/Map.ts#L15)*

___
<a id="pointer"></a>

### `<Protected>` pointer

**● pointer**: *`number`* = 0

*Defined in [Collection/Map.ts:14](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/core/src/Collection/Map.ts#L14)*

___
<a id="values"></a>

### `<Protected>` values

**● values**: *`ValueType`[]*

*Defined in [Collection/Map.ts:16](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/core/src/Collection/Map.ts#L16)*

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>>

*Defined in [Collection/Map.ts:39](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/core/src/Collection/Map.ts#L39)*

**Returns:** `IterableIterator`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>>

___
<a id="next"></a>

###  next

▸ **next**(): `IteratorResult`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>>

*Defined in [Collection/Map.ts:23](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/core/src/Collection/Map.ts#L23)*

**Returns:** `IteratorResult`<[MapTupel](../modules/_collection_map_.md#maptupel)<`KeyType`, `ValueType`>>

___

