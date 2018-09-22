[@apibase/database](../README.md) > ["Database/Change/DeleteChange"](../modules/_database_change_deletechange_.md) > [DeleteChange](../classes/_database_change_deletechange_.deletechange.md)

# Class: DeleteChange

## Hierarchy

 [AbstractChange](_database_change_abstractchange_.abstractchange.md)

**↳ DeleteChange**

## Implements

* [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)

## Index

### Constructors

* [constructor](_database_change_deletechange_.deletechange.md#constructor)

### Properties

* [path](_database_change_deletechange_.deletechange.md#path)
* [timestamp](_database_change_deletechange_.deletechange.md#timestamp)

### Methods

* [getPath](_database_change_deletechange_.deletechange.md#getpath)
* [getTimestamp](_database_change_deletechange_.deletechange.md#gettimestamp)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DeleteChange**(path: *`PathType`*): [DeleteChange](_database_change_deletechange_.deletechange.md)

*Inherited from [AbstractChange](_database_change_abstractchange_.abstractchange.md).[constructor](_database_change_abstractchange_.abstractchange.md#constructor)*

*Defined in [Database/Change/AbstractChange.ts:8](https://github.com/chapterjason/APIBase/blob/c442522/packages/database/src/Database/Change/AbstractChange.ts#L8)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `PathType` |

**Returns:** [DeleteChange](_database_change_deletechange_.deletechange.md)

___

## Properties

<a id="path"></a>

### `<Protected>` path

**● path**: *`Path`*

*Inherited from [AbstractChange](_database_change_abstractchange_.abstractchange.md).[path](_database_change_abstractchange_.abstractchange.md#path)*

*Defined in [Database/Change/AbstractChange.ts:6](https://github.com/chapterjason/APIBase/blob/c442522/packages/database/src/Database/Change/AbstractChange.ts#L6)*

___
<a id="timestamp"></a>

### `<Protected>` timestamp

**● timestamp**: *`Date`*

*Inherited from [AbstractChange](_database_change_abstractchange_.abstractchange.md).[timestamp](_database_change_abstractchange_.abstractchange.md#timestamp)*

*Defined in [Database/Change/AbstractChange.ts:8](https://github.com/chapterjason/APIBase/blob/c442522/packages/database/src/Database/Change/AbstractChange.ts#L8)*

___

## Methods

<a id="getpath"></a>

###  getPath

▸ **getPath**(): `Path`

*Implementation of [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md).[getPath](../interfaces/_database_change_changeinterface_.changeinterface.md#getpath)*

*Inherited from [AbstractChange](_database_change_abstractchange_.abstractchange.md).[getPath](_database_change_abstractchange_.abstractchange.md#getpath)*

*Defined in [Database/Change/AbstractChange.ts:15](https://github.com/chapterjason/APIBase/blob/c442522/packages/database/src/Database/Change/AbstractChange.ts#L15)*

**Returns:** `Path`

___
<a id="gettimestamp"></a>

###  getTimestamp

▸ **getTimestamp**(): `Date`

*Implementation of [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md).[getTimestamp](../interfaces/_database_change_changeinterface_.changeinterface.md#gettimestamp)*

*Inherited from [AbstractChange](_database_change_abstractchange_.abstractchange.md).[getTimestamp](_database_change_abstractchange_.abstractchange.md#gettimestamp)*

*Defined in [Database/Change/AbstractChange.ts:19](https://github.com/chapterjason/APIBase/blob/c442522/packages/database/src/Database/Change/AbstractChange.ts#L19)*

**Returns:** `Date`

___

