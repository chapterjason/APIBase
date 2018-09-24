[@apibase/core](../README.md) > ["Collection/Map"](../modules/_collection_map_.md) > [MapValueIterator](../classes/_collection_map_.mapvalueiterator.md)

# Class: MapValueIterator

## Type parameters
#### ValueType 
## Hierarchy

**MapValueIterator**

## Implements

* `IterableIterator`<`ValueType`>

## Index

### Constructors

* [constructor](_collection_map_.mapvalueiterator.md#constructor)

### Properties

* [pointer](_collection_map_.mapvalueiterator.md#pointer)
* [values](_collection_map_.mapvalueiterator.md#values)

### Methods

* [__@iterator](_collection_map_.mapvalueiterator.md#___iterator)
* [next](_collection_map_.mapvalueiterator.md#next)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MapValueIterator**(values: *`ValueType`[]*): [MapValueIterator](_collection_map_.mapvalueiterator.md)

*Defined in [Collection/Map.ts:48](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Collection/Map.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| values | `ValueType`[] |

**Returns:** [MapValueIterator](_collection_map_.mapvalueiterator.md)

___

## Properties

<a id="pointer"></a>

### `<Protected>` pointer

**● pointer**: *`number`* = 0

*Defined in [Collection/Map.ts:47](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Collection/Map.ts#L47)*

___
<a id="values"></a>

### `<Protected>` values

**● values**: *`ValueType`[]*

*Defined in [Collection/Map.ts:48](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Collection/Map.ts#L48)*

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<`ValueType`>

*Defined in [Collection/Map.ts:70](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Collection/Map.ts#L70)*

**Returns:** `IterableIterator`<`ValueType`>

___
<a id="next"></a>

###  next

▸ **next**(): `IteratorResult`<`ValueType`>

*Defined in [Collection/Map.ts:54](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Collection/Map.ts#L54)*

**Returns:** `IteratorResult`<`ValueType`>

___

