[@apibase/database](../README.md) > ["Database/Reference/CollectionReferenceInterface"](../modules/_database_reference_collectionreferenceinterface_.md) > [CollectionReferenceInterface](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md)

# Interface: CollectionReferenceInterface

## Type parameters
#### ReferenceType 
## Hierarchy

 [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<[CollectionIndex](_database_reference_collectionreferenceinterface_.collectionindex.md)<`ReferenceType`>>

**↳ CollectionReferenceInterface**

## Implemented by

* [CollectionReference](../classes/_database_reference_collectionreference_.collectionreference.md)

## Index

### Methods

* [collection](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#collection)
* [delete](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#delete)
* [get](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#get)
* [getPath](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#getpath)
* [key](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#key)
* [parent](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#parent)
* [push](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#push)
* [reference](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#reference)
* [set](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#set)
* [toJSON](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#tojson)

---

## Methods

<a id="collection"></a>

###  collection

▸ **collection**<`ReferenceType`>(segment: *`string`*): [CollectionReferenceInterface](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md)<`ReferenceType`>

*Inherited from [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md).[collection](_database_reference_referenceinterface_.referenceinterface.md#collection)*

*Defined in [Database/Reference/ReferenceInterface.ts:22](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Reference/ReferenceInterface.ts#L22)*

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

▸ **delete**(): `Promise`<`boolean`>

*Inherited from [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md).[delete](_database_reference_referenceinterface_.referenceinterface.md#delete)*

*Defined in [Database/Reference/ReferenceInterface.ts:28](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Reference/ReferenceInterface.ts#L28)*

**Returns:** `Promise`<`boolean`>

___
<a id="get"></a>

###  get

▸ **get**(): `Promise`<[CollectionSnapshotInterface](_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md)<`ReferenceType`>>

*Overrides [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md).[get](_database_reference_referenceinterface_.referenceinterface.md#get)*

*Defined in [Database/Reference/CollectionReferenceInterface.ts:12](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Reference/CollectionReferenceInterface.ts#L12)*

**Returns:** `Promise`<[CollectionSnapshotInterface](_database_snapshot_collectionsnapshotinterface_.collectionsnapshotinterface.md)<`ReferenceType`>>

___
<a id="getpath"></a>

###  getPath

▸ **getPath**(): `Path`

*Inherited from [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md).[getPath](_database_reference_referenceinterface_.referenceinterface.md#getpath)*

*Defined in [Database/Reference/ReferenceInterface.ts:12](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Reference/ReferenceInterface.ts#L12)*

**Returns:** `Path`

___
<a id="key"></a>

###  key

▸ **key**(): `string`

*Inherited from [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md).[key](_database_reference_referenceinterface_.referenceinterface.md#key)*

*Defined in [Database/Reference/ReferenceInterface.ts:14](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Reference/ReferenceInterface.ts#L14)*

**Returns:** `string`

___
<a id="parent"></a>

###  parent

▸ **parent**<`ParentReferenceType`>():  [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ParentReferenceType`> &#124; `null`

*Inherited from [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md).[parent](_database_reference_referenceinterface_.referenceinterface.md#parent)*

*Defined in [Database/Reference/ReferenceInterface.ts:18](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Reference/ReferenceInterface.ts#L18)*

**Type parameters:**

#### ParentReferenceType 

**Returns:**  [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ParentReferenceType`> &#124; `null`

___
<a id="push"></a>

###  push

▸ **push**(value?: *`ReferenceType`*): `Promise`<[ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ReferenceType`>>

*Defined in [Database/Reference/CollectionReferenceInterface.ts:10](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Reference/CollectionReferenceInterface.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `ReferenceType` |

**Returns:** `Promise`<[ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ReferenceType`>>

___
<a id="reference"></a>

###  reference

▸ **reference**<`ReferenceType`>(segment: *`string`*): [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ReferenceType`>

*Inherited from [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md).[reference](_database_reference_referenceinterface_.referenceinterface.md#reference)*

*Defined in [Database/Reference/ReferenceInterface.ts:20](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Reference/ReferenceInterface.ts#L20)*

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

▸ **set**(value: *[CollectionIndex](_database_reference_collectionreferenceinterface_.collectionindex.md)<`ReferenceType`>*): `Promise`<`boolean`>

*Inherited from [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md).[set](_database_reference_referenceinterface_.referenceinterface.md#set)*

*Defined in [Database/Reference/ReferenceInterface.ts:24](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Reference/ReferenceInterface.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [CollectionIndex](_database_reference_collectionreferenceinterface_.collectionindex.md)<`ReferenceType`> |

**Returns:** `Promise`<`boolean`>

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `Promise`<[ReferenceJSON](_database_reference_referenceinterface_.referencejson.md)>

*Inherited from [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md).[toJSON](_database_reference_referenceinterface_.referenceinterface.md#tojson)*

*Defined in [Database/Reference/ReferenceInterface.ts:16](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/Reference/ReferenceInterface.ts#L16)*

**Returns:** `Promise`<[ReferenceJSON](_database_reference_referenceinterface_.referencejson.md)>

___

