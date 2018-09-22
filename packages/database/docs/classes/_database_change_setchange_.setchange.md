[@apibase/database](../README.md) > ["Database/Change/SetChange"](../modules/_database_change_setchange_.md) > [SetChange](../classes/_database_change_setchange_.setchange.md)

# Class: SetChange

## Hierarchy

 [AbstractChange](_database_change_abstractchange_.abstractchange.md)

**↳ SetChange**

## Implements

* [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)

## Index

### Constructors

* [constructor](_database_change_setchange_.setchange.md#constructor)

### Properties

* [path](_database_change_setchange_.setchange.md#path)
* [timestamp](_database_change_setchange_.setchange.md#timestamp)
* [value](_database_change_setchange_.setchange.md#value)

### Methods

* [getPath](_database_change_setchange_.setchange.md#getpath)
* [getTimestamp](_database_change_setchange_.setchange.md#gettimestamp)
* [getValue](_database_change_setchange_.setchange.md#getvalue)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SetChange**(path: *`PathType`*, value: *`any`*): [SetChange](_database_change_setchange_.setchange.md)

*Overrides [AbstractChange](_database_change_abstractchange_.abstractchange.md).[constructor](_database_change_abstractchange_.abstractchange.md#constructor)*

*Defined in [Database/Change/SetChange.ts:6](https://github.com/chapterjason/APIBase/blob/c442522/packages/database/src/Database/Change/SetChange.ts#L6)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `PathType` |
| value | `any` |

**Returns:** [SetChange](_database_change_setchange_.setchange.md)

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
<a id="value"></a>

### `<Protected>` value

**● value**: *`any`*

*Defined in [Database/Change/SetChange.ts:6](https://github.com/chapterjason/APIBase/blob/c442522/packages/database/src/Database/Change/SetChange.ts#L6)*

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
<a id="getvalue"></a>

###  getValue

▸ **getValue**(): `any`

*Defined in [Database/Change/SetChange.ts:13](https://github.com/chapterjason/APIBase/blob/c442522/packages/database/src/Database/Change/SetChange.ts#L13)*

**Returns:** `any`

___

