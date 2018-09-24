[@apibase/database](../README.md) > ["Database/Change/AbstractChange"](../modules/_database_change_abstractchange_.md) > [AbstractChange](../classes/_database_change_abstractchange_.abstractchange.md)

# Class: AbstractChange

## Hierarchy

**AbstractChange**

↳  [DeleteChange](_database_change_deletechange_.deletechange.md)

↳  [CreateChange](_database_change_createchange_.createchange.md)

↳  [UpdateChange](_database_change_updatechange_.updatechange.md)

## Implements

* [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)

## Index

### Constructors

* [constructor](_database_change_abstractchange_.abstractchange.md#constructor)

### Properties

* [path](_database_change_abstractchange_.abstractchange.md#path)
* [timestamp](_database_change_abstractchange_.abstractchange.md#timestamp)
* [type](_database_change_abstractchange_.abstractchange.md#type)

### Methods

* [getPath](_database_change_abstractchange_.abstractchange.md#getpath)
* [getTimestamp](_database_change_abstractchange_.abstractchange.md#gettimestamp)
* [getType](_database_change_abstractchange_.abstractchange.md#gettype)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AbstractChange**(path: *`PathType`*): [AbstractChange](_database_change_abstractchange_.abstractchange.md)

*Defined in [Database/Change/AbstractChange.ts:10](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/AbstractChange.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `PathType` |

**Returns:** [AbstractChange](_database_change_abstractchange_.abstractchange.md)

___

## Properties

<a id="path"></a>

### `<Protected>` path

**● path**: *`Path`*

*Defined in [Database/Change/AbstractChange.ts:6](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/AbstractChange.ts#L6)*

___
<a id="timestamp"></a>

### `<Protected>` timestamp

**● timestamp**: *`Date`*

*Defined in [Database/Change/AbstractChange.ts:8](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/AbstractChange.ts#L8)*

___
<a id="type"></a>

### `<Protected>` type

**● type**: *`string`* =  undefined

*Defined in [Database/Change/AbstractChange.ts:10](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/AbstractChange.ts#L10)*

___

## Methods

<a id="getpath"></a>

###  getPath

▸ **getPath**(): `Path`

*Implementation of [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md).[getPath](../interfaces/_database_change_changeinterface_.changeinterface.md#getpath)*

*Defined in [Database/Change/AbstractChange.ts:17](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/AbstractChange.ts#L17)*

**Returns:** `Path`

___
<a id="gettimestamp"></a>

###  getTimestamp

▸ **getTimestamp**(): `Date`

*Implementation of [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md).[getTimestamp](../interfaces/_database_change_changeinterface_.changeinterface.md#gettimestamp)*

*Defined in [Database/Change/AbstractChange.ts:21](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/AbstractChange.ts#L21)*

**Returns:** `Date`

___
<a id="gettype"></a>

###  getType

▸ **getType**(): `string`

*Implementation of [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md).[getType](../interfaces/_database_change_changeinterface_.changeinterface.md#gettype)*

*Defined in [Database/Change/AbstractChange.ts:25](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/AbstractChange.ts#L25)*

**Returns:** `string`

___

