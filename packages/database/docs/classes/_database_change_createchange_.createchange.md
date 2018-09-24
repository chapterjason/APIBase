[@apibase/database](../README.md) > ["Database/Change/CreateChange"](../modules/_database_change_createchange_.md) > [CreateChange](../classes/_database_change_createchange_.createchange.md)

# Class: CreateChange

## Type parameters
#### DataType 
## Hierarchy

 [AbstractChange](_database_change_abstractchange_.abstractchange.md)

**↳ CreateChange**

## Implements

* [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)

## Index

### Constructors

* [constructor](_database_change_createchange_.createchange.md#constructor)

### Properties

* [path](_database_change_createchange_.createchange.md#path)
* [timestamp](_database_change_createchange_.createchange.md#timestamp)
* [type](_database_change_createchange_.createchange.md#type)
* [value](_database_change_createchange_.createchange.md#value)

### Methods

* [getPath](_database_change_createchange_.createchange.md#getpath)
* [getTimestamp](_database_change_createchange_.createchange.md#gettimestamp)
* [getType](_database_change_createchange_.createchange.md#gettype)
* [getValue](_database_change_createchange_.createchange.md#getvalue)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CreateChange**(path: *`PathType`*, value: *`DataType`*): [CreateChange](_database_change_createchange_.createchange.md)

*Overrides [AbstractChange](_database_change_abstractchange_.abstractchange.md).[constructor](_database_change_abstractchange_.abstractchange.md#constructor)*

*Defined in [Database/Change/CreateChange.ts:8](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/CreateChange.ts#L8)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `PathType` |
| value | `DataType` |

**Returns:** [CreateChange](_database_change_createchange_.createchange.md)

___

## Properties

<a id="path"></a>

### `<Protected>` path

**● path**: *`Path`*

*Inherited from [AbstractChange](_database_change_abstractchange_.abstractchange.md).[path](_database_change_abstractchange_.abstractchange.md#path)*

*Defined in [Database/Change/AbstractChange.ts:6](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/AbstractChange.ts#L6)*

___
<a id="timestamp"></a>

### `<Protected>` timestamp

**● timestamp**: *`Date`*

*Inherited from [AbstractChange](_database_change_abstractchange_.abstractchange.md).[timestamp](_database_change_abstractchange_.abstractchange.md#timestamp)*

*Defined in [Database/Change/AbstractChange.ts:8](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/AbstractChange.ts#L8)*

___
<a id="type"></a>

### `<Protected>` type

**● type**: *`string`* = "create"

*Overrides [AbstractChange](_database_change_abstractchange_.abstractchange.md).[type](_database_change_abstractchange_.abstractchange.md#type)*

*Defined in [Database/Change/CreateChange.ts:8](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/CreateChange.ts#L8)*

___
<a id="value"></a>

### `<Protected>` value

**● value**: *`DataType`*

*Defined in [Database/Change/CreateChange.ts:6](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/CreateChange.ts#L6)*

___

## Methods

<a id="getpath"></a>

###  getPath

▸ **getPath**(): `Path`

*Implementation of [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md).[getPath](../interfaces/_database_change_changeinterface_.changeinterface.md#getpath)*

*Inherited from [AbstractChange](_database_change_abstractchange_.abstractchange.md).[getPath](_database_change_abstractchange_.abstractchange.md#getpath)*

*Defined in [Database/Change/AbstractChange.ts:17](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/AbstractChange.ts#L17)*

**Returns:** `Path`

___
<a id="gettimestamp"></a>

###  getTimestamp

▸ **getTimestamp**(): `Date`

*Implementation of [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md).[getTimestamp](../interfaces/_database_change_changeinterface_.changeinterface.md#gettimestamp)*

*Inherited from [AbstractChange](_database_change_abstractchange_.abstractchange.md).[getTimestamp](_database_change_abstractchange_.abstractchange.md#gettimestamp)*

*Defined in [Database/Change/AbstractChange.ts:21](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/AbstractChange.ts#L21)*

**Returns:** `Date`

___
<a id="gettype"></a>

###  getType

▸ **getType**(): `string`

*Implementation of [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md).[getType](../interfaces/_database_change_changeinterface_.changeinterface.md#gettype)*

*Inherited from [AbstractChange](_database_change_abstractchange_.abstractchange.md).[getType](_database_change_abstractchange_.abstractchange.md#gettype)*

*Defined in [Database/Change/AbstractChange.ts:25](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/AbstractChange.ts#L25)*

**Returns:** `string`

___
<a id="getvalue"></a>

###  getValue

▸ **getValue**(): `DataType`

*Defined in [Database/Change/CreateChange.ts:15](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/CreateChange.ts#L15)*

**Returns:** `DataType`

___

