[@apibase/database](../README.md) > ["Database/Change/AbstractChange"](../modules/_database_change_abstractchange_.md) > [AbstractChange](../classes/_database_change_abstractchange_.abstractchange.md)

# Class: AbstractChange

## Hierarchy

**AbstractChange**

↳  [DeleteChange](_database_change_deletechange_.deletechange.md)

↳  [SetChange](_database_change_setchange_.setchange.md)

## Implements

* [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)

## Index

### Constructors

* [constructor](_database_change_abstractchange_.abstractchange.md#constructor)

### Properties

* [path](_database_change_abstractchange_.abstractchange.md#path)
* [timestamp](_database_change_abstractchange_.abstractchange.md#timestamp)

### Methods

* [getPath](_database_change_abstractchange_.abstractchange.md#getpath)
* [getTimestamp](_database_change_abstractchange_.abstractchange.md#gettimestamp)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AbstractChange**(path: *`PathType`*): [AbstractChange](_database_change_abstractchange_.abstractchange.md)

*Defined in [Database/Change/AbstractChange.ts:8](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Change/AbstractChange.ts#L8)*

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

*Defined in [Database/Change/AbstractChange.ts:6](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Change/AbstractChange.ts#L6)*

___
<a id="timestamp"></a>

### `<Protected>` timestamp

**● timestamp**: *`Date`*

*Defined in [Database/Change/AbstractChange.ts:8](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Change/AbstractChange.ts#L8)*

___

## Methods

<a id="getpath"></a>

###  getPath

▸ **getPath**(): `Path`

*Implementation of [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md).[getPath](../interfaces/_database_change_changeinterface_.changeinterface.md#getpath)*

*Defined in [Database/Change/AbstractChange.ts:15](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Change/AbstractChange.ts#L15)*

**Returns:** `Path`

___
<a id="gettimestamp"></a>

###  getTimestamp

▸ **getTimestamp**(): `Date`

*Implementation of [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md).[getTimestamp](../interfaces/_database_change_changeinterface_.changeinterface.md#gettimestamp)*

*Defined in [Database/Change/AbstractChange.ts:19](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Change/AbstractChange.ts#L19)*

**Returns:** `Date`

___

