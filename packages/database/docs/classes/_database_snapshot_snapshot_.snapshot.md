[@apibase/database](../README.md) > ["Database/Snapshot/Snapshot"](../modules/_database_snapshot_snapshot_.md) > [Snapshot](../classes/_database_snapshot_snapshot_.snapshot.md)

# Class: Snapshot

## Type parameters
#### SnapshotType 
## Hierarchy

**Snapshot**

↳  [CollectionSnapshot](_database_snapshot_collectionsnapshot_.collectionsnapshot.md)

## Implements

* [SnapshotInterface](../interfaces/_database_snapshot_snapshotinterface_.snapshotinterface.md)<`SnapshotType`>

## Index

### Constructors

* [constructor](_database_snapshot_snapshot_.snapshot.md#constructor)

### Properties

* [data](_database_snapshot_snapshot_.snapshot.md#data)
* [reference](_database_snapshot_snapshot_.snapshot.md#reference)

### Methods

* [key](_database_snapshot_snapshot_.snapshot.md#key)
* [value](_database_snapshot_snapshot_.snapshot.md#value)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Snapshot**(reference: *[ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md)<`SnapshotType`>*, data: *`SnapshotType`*): [Snapshot](_database_snapshot_snapshot_.snapshot.md)

*Defined in [Database/Snapshot/Snapshot.ts:17](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Snapshot/Snapshot.ts#L17)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| reference | [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md)<`SnapshotType`> |
| data | `SnapshotType` |

**Returns:** [Snapshot](_database_snapshot_snapshot_.snapshot.md)

___

## Properties

<a id="data"></a>

### `<Protected>` data

**● data**: *`SnapshotType`*

*Defined in [Database/Snapshot/Snapshot.ts:15](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Snapshot/Snapshot.ts#L15)*

___
<a id="reference"></a>

### `<Protected>` reference

**● reference**: *[ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md)<`SnapshotType`>*

*Defined in [Database/Snapshot/Snapshot.ts:17](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Snapshot/Snapshot.ts#L17)*

___

## Methods

<a id="key"></a>

###  key

▸ **key**(): `string`

*Implementation of [SnapshotInterface](../interfaces/_database_snapshot_snapshotinterface_.snapshotinterface.md).[key](../interfaces/_database_snapshot_snapshotinterface_.snapshotinterface.md#key)*

*Defined in [Database/Snapshot/Snapshot.ts:28](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Snapshot/Snapshot.ts#L28)*

**Returns:** `string`

___
<a id="value"></a>

###  value

▸ **value**(): `SnapshotType`

*Implementation of [SnapshotInterface](../interfaces/_database_snapshot_snapshotinterface_.snapshotinterface.md).[value](../interfaces/_database_snapshot_snapshotinterface_.snapshotinterface.md#value)*

*Defined in [Database/Snapshot/Snapshot.ts:24](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Snapshot/Snapshot.ts#L24)*

**Returns:** `SnapshotType`

___

