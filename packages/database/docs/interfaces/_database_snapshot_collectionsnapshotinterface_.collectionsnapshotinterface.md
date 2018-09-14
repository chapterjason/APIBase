[@apibase/database](../README.md) > ["Database/Snapshot/CollectionSnapshotInterface"](../modules/_database_snapshot_collectionsnapshotinterface_.md) > [CollectionSnapshotInterface](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md)

# Interface: CollectionSnapshotInterface

## Type parameters
#### SnapshotType 
## Hierarchy

 [SnapshotInterface](_database_snapshot_snapshotinterface_.snapshotinterface.md)<[CollectionIndex](_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`>>

**↳ CollectionSnapshotInterface**

## Implemented by

* [CollectionSnapshot](../classes/_database_snapshot_collectionsnapshot_.collectionsnapshot.md)

## Index

### Methods

* [forEach](_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#foreach)
* [item](_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#item)
* [key](_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#key)
* [length](_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#length)
* [reverse](_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#reverse)
* [sort](_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#sort)
* [sortByKey](_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#sortbykey)
* [sortByProperty](_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#sortbyproperty)
* [value](_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#value)

---

## Methods

<a id="foreach"></a>

###  forEach

▸ **forEach**(callback: *`function`*): `this`

*Defined in [Database/Snapshot/CollectionSnapshotInterface.ts:9](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Snapshot/CollectionSnapshotInterface.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `this`

___
<a id="item"></a>

###  item

▸ **item**(segment: *`string`*): [SnapshotInterface](_database_snapshot_snapshotinterface_.snapshotinterface.md)<`SnapshotType`>

*Defined in [Database/Snapshot/CollectionSnapshotInterface.ts:7](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Snapshot/CollectionSnapshotInterface.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| segment | `string` |

**Returns:** [SnapshotInterface](_database_snapshot_snapshotinterface_.snapshotinterface.md)<`SnapshotType`>

___
<a id="key"></a>

###  key

▸ **key**(): `string`

*Inherited from [SnapshotInterface](_database_snapshot_snapshotinterface_.snapshotinterface.md).[key](_database_snapshot_snapshotinterface_.snapshotinterface.md#key)*

*Defined in [Database/Snapshot/SnapshotInterface.ts:5](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Snapshot/SnapshotInterface.ts#L5)*

**Returns:** `string`

___
<a id="length"></a>

###  length

▸ **length**(): `number`

*Defined in [Database/Snapshot/CollectionSnapshotInterface.ts:11](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Snapshot/CollectionSnapshotInterface.ts#L11)*

**Returns:** `number`

___
<a id="reverse"></a>

###  reverse

▸ **reverse**(): `this`

*Defined in [Database/Snapshot/CollectionSnapshotInterface.ts:13](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Snapshot/CollectionSnapshotInterface.ts#L13)*

**Returns:** `this`

___
<a id="sort"></a>

###  sort

▸ **sort**(compare: *`function`*): `this`

*Defined in [Database/Snapshot/CollectionSnapshotInterface.ts:19](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Snapshot/CollectionSnapshotInterface.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| compare | `function` |

**Returns:** `this`

___
<a id="sortbykey"></a>

###  sortByKey

▸ **sortByKey**(): `this`

*Defined in [Database/Snapshot/CollectionSnapshotInterface.ts:15](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Snapshot/CollectionSnapshotInterface.ts#L15)*

**Returns:** `this`

___
<a id="sortbyproperty"></a>

###  sortByProperty

▸ **sortByProperty**(property: *`string`*): `this`

*Defined in [Database/Snapshot/CollectionSnapshotInterface.ts:17](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Snapshot/CollectionSnapshotInterface.ts#L17)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| property | `string` |

**Returns:** `this`

___
<a id="value"></a>

###  value

▸ **value**(): [CollectionIndex](_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`>

*Inherited from [SnapshotInterface](_database_snapshot_snapshotinterface_.snapshotinterface.md).[value](_database_snapshot_snapshotinterface_.snapshotinterface.md#value)*

*Defined in [Database/Snapshot/SnapshotInterface.ts:3](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Snapshot/SnapshotInterface.ts#L3)*

**Returns:** [CollectionIndex](_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`>

___

