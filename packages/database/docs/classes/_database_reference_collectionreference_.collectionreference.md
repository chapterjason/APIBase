[@apibase/database](../README.md) > ["Database/Reference/CollectionReference"](../modules/_database_reference_collectionreference_.md) > [CollectionReference](../classes/_database_reference_collectionreference_.collectionreference.md)

# Class: CollectionReference

## Type parameters
#### ReferenceType 
## Hierarchy

 [Reference](_database_reference_reference_.reference.md)<[CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`ReferenceType`>>

**↳ CollectionReference**

## Implements

* [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md)<[CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`ReferenceType`>>
* [CollectionReferenceInterface](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md)<`ReferenceType`>

## Index

### Constructors

* [constructor](_database_reference_collectionreference_.collectionreference.md#constructor)

### Properties

* [database](_database_reference_collectionreference_.collectionreference.md#database)
* [path](_database_reference_collectionreference_.collectionreference.md#path)

### Methods

* [collection](_database_reference_collectionreference_.collectionreference.md#collection)
* [delete](_database_reference_collectionreference_.collectionreference.md#delete)
* [get](_database_reference_collectionreference_.collectionreference.md#get)
* [getPath](_database_reference_collectionreference_.collectionreference.md#getpath)
* [key](_database_reference_collectionreference_.collectionreference.md#key)
* [parent](_database_reference_collectionreference_.collectionreference.md#parent)
* [push](_database_reference_collectionreference_.collectionreference.md#push)
* [reference](_database_reference_collectionreference_.collectionreference.md#reference)
* [set](_database_reference_collectionreference_.collectionreference.md#set)
* [toJSON](_database_reference_collectionreference_.collectionreference.md#tojson)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CollectionReference**(database: *[Database](_database_database_.database.md)*, path: *`Path`*): [CollectionReference](_database_reference_collectionreference_.collectionreference.md)

*Inherited from [Reference](_database_reference_reference_.reference.md).[constructor](_database_reference_reference_.reference.md#constructor)*

*Defined in [Database/Reference/Reference.ts:19](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/Reference.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| database | [Database](_database_database_.database.md) |
| path | `Path` |

**Returns:** [CollectionReference](_database_reference_collectionreference_.collectionreference.md)

___

## Properties

<a id="database"></a>

### `<Protected>` database

**● database**: *[Database](_database_database_.database.md)*

*Inherited from [Reference](_database_reference_reference_.reference.md).[database](_database_reference_reference_.reference.md#database)*

*Defined in [Database/Reference/Reference.ts:17](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/Reference.ts#L17)*

___
<a id="path"></a>

### `<Protected>` path

**● path**: *`Path`*

*Inherited from [Reference](_database_reference_reference_.reference.md).[path](_database_reference_reference_.reference.md#path)*

*Defined in [Database/Reference/Reference.ts:19](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/Reference.ts#L19)*

___

## Methods

<a id="collection"></a>

###  collection

▸ **collection**<`ReferenceType`>(segment: *`string`*): [CollectionReference](_database_reference_collectionreference_.collectionreference.md)<`ReferenceType`>

*Implementation of [CollectionReferenceInterface](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md).[collection](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#collection)*

*Inherited from [Reference](_database_reference_reference_.reference.md).[collection](_database_reference_reference_.reference.md#collection)*

*Defined in [Database/Reference/Reference.ts:55](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/Reference.ts#L55)*

**Type parameters:**

#### ReferenceType 
**Parameters:**

| Param | Type |
| ------ | ------ |
| segment | `string` |

**Returns:** [CollectionReference](_database_reference_collectionreference_.collectionreference.md)<`ReferenceType`>

___
<a id="delete"></a>

###  delete

▸ **delete**(): `boolean`

*Implementation of [CollectionReferenceInterface](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md).[delete](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#delete)*

*Inherited from [Reference](_database_reference_reference_.reference.md).[delete](_database_reference_reference_.reference.md#delete)*

*Defined in [Database/Reference/Reference.ts:67](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/Reference.ts#L67)*

**Returns:** `boolean`

___
<a id="get"></a>

###  get

▸ **get**(): [CollectionSnapshot](_database_snapshot_collectionsnapshot_.collectionsnapshot.md)<`ReferenceType`>

*Implementation of [CollectionReferenceInterface](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md).[get](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#get)*

*Overrides [Reference](_database_reference_reference_.reference.md).[get](_database_reference_reference_.reference.md#get)*

*Defined in [Database/Reference/CollectionReference.ts:28](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/CollectionReference.ts#L28)*

**Returns:** [CollectionSnapshot](_database_snapshot_collectionsnapshot_.collectionsnapshot.md)<`ReferenceType`>

___
<a id="getpath"></a>

###  getPath

▸ **getPath**(): `Path`

*Implementation of [CollectionReferenceInterface](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md).[getPath](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#getpath)*

*Inherited from [Reference](_database_reference_reference_.reference.md).[getPath](_database_reference_reference_.reference.md#getpath)*

*Defined in [Database/Reference/Reference.ts:26](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/Reference.ts#L26)*

**Returns:** `Path`

___
<a id="key"></a>

###  key

▸ **key**(): `string`

*Implementation of [CollectionReferenceInterface](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md).[key](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#key)*

*Inherited from [Reference](_database_reference_reference_.reference.md).[key](_database_reference_reference_.reference.md#key)*

*Defined in [Database/Reference/Reference.ts:30](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/Reference.ts#L30)*

**Returns:** `string`

___
<a id="parent"></a>

###  parent

▸ **parent**<`ParentReferenceType`>():  [Reference](_database_reference_reference_.reference.md)<`ParentReferenceType`> &#124; `null`

*Implementation of [CollectionReferenceInterface](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md).[parent](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#parent)*

*Inherited from [Reference](_database_reference_reference_.reference.md).[parent](_database_reference_reference_.reference.md#parent)*

*Defined in [Database/Reference/Reference.ts:41](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/Reference.ts#L41)*

**Type parameters:**

#### ParentReferenceType 

**Returns:**  [Reference](_database_reference_reference_.reference.md)<`ParentReferenceType`> &#124; `null`

___
<a id="push"></a>

###  push

▸ **push**(value?: *`ReferenceType`*): [Reference](_database_reference_reference_.reference.md)<`ReferenceType`>

*Implementation of [CollectionReferenceInterface](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md).[push](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#push)*

*Defined in [Database/Reference/CollectionReference.ts:17](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/CollectionReference.ts#L17)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `ReferenceType` |

**Returns:** [Reference](_database_reference_reference_.reference.md)<`ReferenceType`>

___
<a id="reference"></a>

###  reference

▸ **reference**<`ReferenceType`>(segment: *`string`*): [Reference](_database_reference_reference_.reference.md)<`ReferenceType`>

*Implementation of [CollectionReferenceInterface](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md).[reference](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#reference)*

*Inherited from [Reference](_database_reference_reference_.reference.md).[reference](_database_reference_reference_.reference.md#reference)*

*Defined in [Database/Reference/Reference.ts:51](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/Reference.ts#L51)*

**Type parameters:**

#### ReferenceType 
**Parameters:**

| Param | Type |
| ------ | ------ |
| segment | `string` |

**Returns:** [Reference](_database_reference_reference_.reference.md)<`ReferenceType`>

___
<a id="set"></a>

###  set

▸ **set**(value: *[CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`ReferenceType`>*): `boolean`

*Implementation of [CollectionReferenceInterface](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md).[set](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#set)*

*Inherited from [Reference](_database_reference_reference_.reference.md).[set](_database_reference_reference_.reference.md#set)*

*Defined in [Database/Reference/Reference.ts:59](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/Reference.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [CollectionIndex](../interfaces/_database_reference_collectionreferenceinterface_.collectionindex.md)<`ReferenceType`> |

**Returns:** `boolean`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): [ReferenceJSON](../interfaces/_database_reference_referenceinterface_.referencejson.md)

*Implementation of [CollectionReferenceInterface](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md).[toJSON](../interfaces/_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md#tojson)*

*Inherited from [Reference](_database_reference_reference_.reference.md).[toJSON](_database_reference_reference_.reference.md#tojson)*

*Defined in [Database/Reference/Reference.ts:34](https://github.com/chapterjason/APIBase/blob/d8cc53d/packages/database/src/Database/Reference/Reference.ts#L34)*

**Returns:** [ReferenceJSON](../interfaces/_database_reference_referenceinterface_.referencejson.md)

___

