[@apibase/database](../README.md) > ["Database/Reference/ReferenceInterface"](../modules/_database_reference_referenceinterface_.md) > [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md)

# Interface: ReferenceInterface

## Type parameters
#### ReferenceType 
## Hierarchy

**ReferenceInterface**

↳  [CollectionReferenceInterface](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md)

## Implemented by

* [CollectionReference](../classes/_database_reference_collectionreference_.collectionreference.md)
* [Reference](../classes/_database_reference_reference_.reference.md)

## Index

### Methods

* [collection](_database_reference_referenceinterface_.referenceinterface.md#collection)
* [delete](_database_reference_referenceinterface_.referenceinterface.md#delete)
* [get](_database_reference_referenceinterface_.referenceinterface.md#get)
* [getPath](_database_reference_referenceinterface_.referenceinterface.md#getpath)
* [key](_database_reference_referenceinterface_.referenceinterface.md#key)
* [parent](_database_reference_referenceinterface_.referenceinterface.md#parent)
* [reference](_database_reference_referenceinterface_.referenceinterface.md#reference)
* [set](_database_reference_referenceinterface_.referenceinterface.md#set)
* [toJSON](_database_reference_referenceinterface_.referenceinterface.md#tojson)

---

## Methods

<a id="collection"></a>

###  collection

▸ **collection**<`ReferenceType`>(segment: *`string`*): [CollectionReferenceInterface](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md)<`ReferenceType`>

*Defined in [Database/Reference/ReferenceInterface.ts:22](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/ReferenceInterface.ts#L22)*

**Type parameters:**

#### ReferenceType 
**Parameters:**

| Param | Type |
| ------ | ------ |
| segment | `string` |

**Returns:** [CollectionReferenceInterface](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md)<`ReferenceType`>

___
<a id="delete"></a>

###  delete

▸ **delete**():  `boolean` &#124; `Promise`<`boolean`>

*Defined in [Database/Reference/ReferenceInterface.ts:28](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/ReferenceInterface.ts#L28)*

**Returns:**  `boolean` &#124; `Promise`<`boolean`>

___
<a id="get"></a>

###  get

▸ **get**():  [SnapshotInterface](_database_snapshot_snapshotinterface_.snapshotinterface.md)<`ReferenceType`> &#124; `Promise`<[SnapshotInterface](_database_snapshot_snapshotinterface_.snapshotinterface.md)<`ReferenceType`>>

*Defined in [Database/Reference/ReferenceInterface.ts:26](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/ReferenceInterface.ts#L26)*

**Returns:**  [SnapshotInterface](_database_snapshot_snapshotinterface_.snapshotinterface.md)<`ReferenceType`> &#124; `Promise`<[SnapshotInterface](_database_snapshot_snapshotinterface_.snapshotinterface.md)<`ReferenceType`>>

___
<a id="getpath"></a>

###  getPath

▸ **getPath**(): `Path`

*Defined in [Database/Reference/ReferenceInterface.ts:12](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/ReferenceInterface.ts#L12)*

**Returns:** `Path`

___
<a id="key"></a>

###  key

▸ **key**(): `string`

*Defined in [Database/Reference/ReferenceInterface.ts:14](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/ReferenceInterface.ts#L14)*

**Returns:** `string`

___
<a id="parent"></a>

###  parent

▸ **parent**<`ParentReferenceType`>():  [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ParentReferenceType`> &#124; `null`

*Defined in [Database/Reference/ReferenceInterface.ts:18](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/ReferenceInterface.ts#L18)*

**Type parameters:**

#### ParentReferenceType 

**Returns:**  [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ParentReferenceType`> &#124; `null`

___
<a id="reference"></a>

###  reference

▸ **reference**<`ReferenceType`>(segment: *`string`*): [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ReferenceType`>

*Defined in [Database/Reference/ReferenceInterface.ts:20](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/ReferenceInterface.ts#L20)*

**Type parameters:**

#### ReferenceType 
**Parameters:**

| Param | Type |
| ------ | ------ |
| segment | `string` |

**Returns:** [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ReferenceType`>

___
<a id="set"></a>

###  set

▸ **set**(value: *`ReferenceType`*):  `boolean` &#124; `Promise`<`boolean`>

*Defined in [Database/Reference/ReferenceInterface.ts:24](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/ReferenceInterface.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `ReferenceType` |

**Returns:**  `boolean` &#124; `Promise`<`boolean`>

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**():  [ReferenceJSON](_database_reference_referenceinterface_.referencejson.md) &#124; `Promise`<[ReferenceJSON](_database_reference_referenceinterface_.referencejson.md)>

*Defined in [Database/Reference/ReferenceInterface.ts:16](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/ReferenceInterface.ts#L16)*

**Returns:**  [ReferenceJSON](_database_reference_referenceinterface_.referencejson.md) &#124; `Promise`<[ReferenceJSON](_database_reference_referenceinterface_.referencejson.md)>

___

