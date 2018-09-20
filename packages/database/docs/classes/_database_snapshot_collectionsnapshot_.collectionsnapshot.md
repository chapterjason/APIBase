[@apibase/database](../README.md) > ["Database/Snapshot/CollectionSnapshot"](../modules/_database_snapshot_collectionsnapshot_.md) > [CollectionSnapshot](../classes/_database_snapshot_collectionsnapshot_.collectionsnapshot.md)

# Class: CollectionSnapshot

## Type parameters
#### SnapshotType 
## Hierarchy

 [Snapshot](_database_snapshot_snapshot_.snapshot.md)<[CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`>>

**↳ CollectionSnapshot**

## Implements

* [SnapshotInterface](../interfaces/_database_snapshot_snapshotinterface_.snapshotinterface.md)<[CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`>>
* [CollectionSnapshotInterface](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md)<`SnapshotType`>

## Index

### Constructors

* [constructor](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#constructor)

### Properties

* [_map](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#_map)
* [data](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#data)
* [reference](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#reference)

### Methods

* [forEach](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#foreach)
* [item](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#item)
* [key](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#key)
* [length](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#length)
* [map](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#map)
* [reverse](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#reverse)
* [sort](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#sort)
* [sortByKey](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#sortbykey)
* [sortByProperty](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#sortbyproperty)
* [value](_database_snapshot_collectionsnapshot_.collectionsnapshot.md#value)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CollectionSnapshot**(reference: *[ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md)<[CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`>>*, data: *[CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`>*): [CollectionSnapshot](_database_snapshot_collectionsnapshot_.collectionsnapshot.md)

*Overrides [Snapshot](_database_snapshot_snapshot_.snapshot.md).[constructor](_database_snapshot_snapshot_.snapshot.md#constructor)*

*Defined in [Database/Snapshot/CollectionSnapshot.ts:17](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/CollectionSnapshot.ts#L17)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| reference | [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md)<[CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`>> |
| data | [CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`> |

**Returns:** [CollectionSnapshot](_database_snapshot_collectionsnapshot_.collectionsnapshot.md)

___

## Properties

<a id="_map"></a>

### `<Protected>` _map

**● _map**: *`Map`<`string`, `SnapshotType`>*

*Defined in [Database/Snapshot/CollectionSnapshot.ts:17](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/CollectionSnapshot.ts#L17)*

___
<a id="data"></a>

### `<Protected>` data

**● data**: *[CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`>*

*Inherited from [Snapshot](_database_snapshot_snapshot_.snapshot.md).[data](_database_snapshot_snapshot_.snapshot.md#data)*

*Defined in [Database/Snapshot/Snapshot.ts:15](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/Snapshot.ts#L15)*

___
<a id="reference"></a>

### `<Protected>` reference

**● reference**: *[ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md)<[CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`>>*

*Inherited from [Snapshot](_database_snapshot_snapshot_.snapshot.md).[reference](_database_snapshot_snapshot_.snapshot.md#reference)*

*Defined in [Database/Snapshot/Snapshot.ts:17](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/Snapshot.ts#L17)*

___

## Methods

<a id="foreach"></a>

###  forEach

▸ **forEach**(callback: *`function`*): `this`

*Defined in [Database/Snapshot/CollectionSnapshot.ts:42](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/CollectionSnapshot.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `this`

___
<a id="item"></a>

###  item

▸ **item**(segment: *`string`*): [Snapshot](_database_snapshot_snapshot_.snapshot.md)<`SnapshotType`>

*Implementation of [CollectionSnapshotInterface](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md).[item](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#item)*

*Defined in [Database/Snapshot/CollectionSnapshot.ts:38](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/CollectionSnapshot.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| segment | `string` |

**Returns:** [Snapshot](_database_snapshot_snapshot_.snapshot.md)<`SnapshotType`>

___
<a id="key"></a>

###  key

▸ **key**(): `string`

*Implementation of [CollectionSnapshotInterface](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md).[key](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#key)*

*Inherited from [Snapshot](_database_snapshot_snapshot_.snapshot.md).[key](_database_snapshot_snapshot_.snapshot.md#key)*

*Defined in [Database/Snapshot/Snapshot.ts:28](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/Snapshot.ts#L28)*

**Returns:** `string`

___
<a id="length"></a>

###  length

▸ **length**(): `number`

*Implementation of [CollectionSnapshotInterface](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md).[length](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#length)*

*Defined in [Database/Snapshot/CollectionSnapshot.ts:60](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/CollectionSnapshot.ts#L60)*

**Returns:** `number`

___
<a id="map"></a>

###  map

▸ **map**<`Type`>(callback: *`function`*): `Type`[]

*Defined in [Database/Snapshot/CollectionSnapshot.ts:50](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/CollectionSnapshot.ts#L50)*

**Type parameters:**

#### Type 
**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `Type`[]

___
<a id="reverse"></a>

###  reverse

▸ **reverse**(): `this`

*Implementation of [CollectionSnapshotInterface](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md).[reverse](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#reverse)*

*Defined in [Database/Snapshot/CollectionSnapshot.ts:64](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/CollectionSnapshot.ts#L64)*

**Returns:** `this`

___
<a id="sort"></a>

###  sort

▸ **sort**(compare: *`function`*): `this`

*Defined in [Database/Snapshot/CollectionSnapshot.ts:86](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/CollectionSnapshot.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| compare | `function` |

**Returns:** `this`

___
<a id="sortbykey"></a>

###  sortByKey

▸ **sortByKey**(): `this`

*Implementation of [CollectionSnapshotInterface](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md).[sortByKey](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#sortbykey)*

*Defined in [Database/Snapshot/CollectionSnapshot.ts:70](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/CollectionSnapshot.ts#L70)*

**Returns:** `this`

___
<a id="sortbyproperty"></a>

###  sortByProperty

▸ **sortByProperty**(property: *`string`*): `this`

*Implementation of [CollectionSnapshotInterface](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md).[sortByProperty](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#sortbyproperty)*

*Defined in [Database/Snapshot/CollectionSnapshot.ts:78](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/CollectionSnapshot.ts#L78)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| property | `string` |

**Returns:** `this`

___
<a id="value"></a>

###  value

▸ **value**(): [CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`>

*Implementation of [CollectionSnapshotInterface](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md).[value](../interfaces/_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md#value)*

*Inherited from [Snapshot](_database_snapshot_snapshot_.snapshot.md).[value](_database_snapshot_snapshot_.snapshot.md#value)*

*Defined in [Database/Snapshot/Snapshot.ts:24](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Snapshot/Snapshot.ts#L24)*

**Returns:** [CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`SnapshotType`>

___

