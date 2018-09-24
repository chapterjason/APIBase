[@apibase/database](../README.md) > ["Database/Change/UpdateChange"](../modules/_database_change_updatechange_.md) > [UpdateChange](../classes/_database_change_updatechange_.updatechange.md)

# Class: UpdateChange

## Type parameters
#### DataType 
## Hierarchy

 [AbstractChange](_database_change_abstractchange_.abstractchange.md)

**↳ UpdateChange**

## Implements

* [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)

## Index

### Constructors

* [constructor](_database_change_updatechange_.updatechange.md#constructor)

### Properties

* [before](_database_change_updatechange_.updatechange.md#before)
* [path](_database_change_updatechange_.updatechange.md#path)
* [timestamp](_database_change_updatechange_.updatechange.md#timestamp)
* [type](_database_change_updatechange_.updatechange.md#type)
* [value](_database_change_updatechange_.updatechange.md#value)

### Methods

* [getBefore](_database_change_updatechange_.updatechange.md#getbefore)
* [getPath](_database_change_updatechange_.updatechange.md#getpath)
* [getTimestamp](_database_change_updatechange_.updatechange.md#gettimestamp)
* [getType](_database_change_updatechange_.updatechange.md#gettype)
* [getValue](_database_change_updatechange_.updatechange.md#getvalue)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UpdateChange**(path: *`PathType`*, before: *`DataType`*, value: *`DataType`*): [UpdateChange](_database_change_updatechange_.updatechange.md)

*Overrides [AbstractChange](_database_change_abstractchange_.abstractchange.md).[constructor](_database_change_abstractchange_.abstractchange.md#constructor)*

*Defined in [Database/Change/UpdateChange.ts:10](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/UpdateChange.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `PathType` |
| before | `DataType` |
| value | `DataType` |

**Returns:** [UpdateChange](_database_change_updatechange_.updatechange.md)

___

## Properties

<a id="before"></a>

### `<Protected>` before

**● before**: *`DataType`*

*Defined in [Database/Change/UpdateChange.ts:6](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/UpdateChange.ts#L6)*

___
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

**● type**: *`string`* = "update"

*Overrides [AbstractChange](_database_change_abstractchange_.abstractchange.md).[type](_database_change_abstractchange_.abstractchange.md#type)*

*Defined in [Database/Change/UpdateChange.ts:10](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/UpdateChange.ts#L10)*

___
<a id="value"></a>

### `<Protected>` value

**● value**: *`DataType`*

*Defined in [Database/Change/UpdateChange.ts:8](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/UpdateChange.ts#L8)*

___

## Methods

<a id="getbefore"></a>

###  getBefore

▸ **getBefore**(): `DataType`

*Defined in [Database/Change/UpdateChange.ts:18](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/UpdateChange.ts#L18)*

**Returns:** `DataType`

___
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

*Defined in [Database/Change/UpdateChange.ts:22](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Change/UpdateChange.ts#L22)*

**Returns:** `DataType`

___

