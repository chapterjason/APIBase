[@apibase/core](../README.md) > ["Collection/Map"](../modules/_collection_map_.md) > [MapKeyIterator](../classes/_collection_map_.mapkeyiterator.md)

# Class: MapKeyIterator

## Type parameters
#### KeyType 
## Hierarchy

**MapKeyIterator**

## Implements

* `IterableIterator`<`KeyType`>

## Index

### Constructors

* [constructor](_collection_map_.mapkeyiterator.md#constructor)

### Properties

* [keys](_collection_map_.mapkeyiterator.md#keys)
* [pointer](_collection_map_.mapkeyiterator.md#pointer)

### Methods

* [__@iterator](_collection_map_.mapkeyiterator.md#___iterator)
* [next](_collection_map_.mapkeyiterator.md#next)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MapKeyIterator**(keys: *`KeyType`[]*): [MapKeyIterator](_collection_map_.mapkeyiterator.md)

*Defined in [Collection/Map.ts:78](https://github.com/chapterjason/APIBase/blob/c442522/packages/core/src/Collection/Map.ts#L78)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| keys | `KeyType`[] |

**Returns:** [MapKeyIterator](_collection_map_.mapkeyiterator.md)

___

## Properties

<a id="keys"></a>

### `<Protected>` keys

**● keys**: *`KeyType`[]*

*Defined in [Collection/Map.ts:78](https://github.com/chapterjason/APIBase/blob/c442522/packages/core/src/Collection/Map.ts#L78)*

___
<a id="pointer"></a>

### `<Protected>` pointer

**● pointer**: *`number`* = 0

*Defined in [Collection/Map.ts:77](https://github.com/chapterjason/APIBase/blob/c442522/packages/core/src/Collection/Map.ts#L77)*

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<`KeyType`>

*Defined in [Collection/Map.ts:100](https://github.com/chapterjason/APIBase/blob/c442522/packages/core/src/Collection/Map.ts#L100)*

**Returns:** `IterableIterator`<`KeyType`>

___
<a id="next"></a>

###  next

▸ **next**(): `IteratorResult`<`KeyType`>

*Defined in [Collection/Map.ts:84](https://github.com/chapterjason/APIBase/blob/c442522/packages/core/src/Collection/Map.ts#L84)*

**Returns:** `IteratorResult`<`KeyType`>

___

