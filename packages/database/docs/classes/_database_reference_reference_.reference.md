[@apibase/database](../README.md) > ["Database/Reference/Reference"](../modules/_database_reference_reference_.md) > [Reference](../classes/_database_reference_reference_.reference.md)

# Class: Reference

## Type parameters
#### ReferenceType 
## Hierarchy

**Reference**

↳  [CollectionReference](_database_reference_collectionreference_.collectionreference.md)

## Implements

* [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md)<`ReferenceType`>

## Index

### Constructors

* [constructor](_database_reference_reference_.reference.md#constructor)

### Properties

* [database](_database_reference_reference_.reference.md#database)
* [path](_database_reference_reference_.reference.md#path)

### Methods

* [collection](_database_reference_reference_.reference.md#collection)
* [delete](_database_reference_reference_.reference.md#delete)
* [get](_database_reference_reference_.reference.md#get)
* [getPath](_database_reference_reference_.reference.md#getpath)
* [key](_database_reference_reference_.reference.md#key)
* [parent](_database_reference_reference_.reference.md#parent)
* [reference](_database_reference_reference_.reference.md#reference)
* [set](_database_reference_reference_.reference.md#set)
* [toJSON](_database_reference_reference_.reference.md#tojson)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Reference**(database: *[Database](_database_database_.database.md)*, path: *`Path`*): [Reference](_database_reference_reference_.reference.md)

*Defined in [Database/Reference/Reference.ts:19](https://github.com/chapterjason/APIBase/blob/00af181/packages/database/src/Database/Reference/Reference.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| database | [Database](_database_database_.database.md) |
| path | `Path` |

**Returns:** [Reference](_database_reference_reference_.reference.md)

___

## Properties

<a id="database"></a>

### `<Protected>` database

**● database**: *[Database](_database_database_.database.md)*

*Defined in [Database/Reference/Reference.ts:17](https://github.com/chapterjason/APIBase/blob/00af181/packages/database/src/Database/Reference/Reference.ts#L17)*

___
<a id="path"></a>

### `<Protected>` path

**● path**: *`Path`*

*Defined in [Database/Reference/Reference.ts:19](https://github.com/chapterjason/APIBase/blob/00af181/packages/database/src/Database/Reference/Reference.ts#L19)*

___

## Methods

<a id="collection"></a>

###  collection

▸ **collection**<`ReferenceType`>(segment: *`string`*): [CollectionReference](_database_reference_collectionreference_.collectionreference.md)<`ReferenceType`>

*Implementation of [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md).[collection](../interfaces/_database_reference_referenceinterface_.referenceinterface.md#collection)*

*Defined in [Database/Reference/Reference.ts:55](https://github.com/chapterjason/APIBase/blob/00af181/packages/database/src/Database/Reference/Reference.ts#L55)*

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

*Implementation of [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md).[delete](../interfaces/_database_reference_referenceinterface_.referenceinterface.md#delete)*

*Defined in [Database/Reference/Reference.ts:67](https://github.com/chapterjason/APIBase/blob/00af181/packages/database/src/Database/Reference/Reference.ts#L67)*

**Returns:** `boolean`

___
<a id="get"></a>

###  get

▸ **get**(): [Snapshot](_database_snapshot_snapshot_.snapshot.md)<`ReferenceType`>

*Implementation of [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md).[get](../interfaces/_database_reference_referenceinterface_.referenceinterface.md#get)*

*Defined in [Database/Reference/Reference.ts:63](https://github.com/chapterjason/APIBase/blob/00af181/packages/database/src/Database/Reference/Reference.ts#L63)*

**Returns:** [Snapshot](_database_snapshot_snapshot_.snapshot.md)<`ReferenceType`>

___
<a id="getpath"></a>

###  getPath

▸ **getPath**(): `Path`

*Implementation of [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md).[getPath](../interfaces/_database_reference_referenceinterface_.referenceinterface.md#getpath)*

*Defined in [Database/Reference/Reference.ts:26](https://github.com/chapterjason/APIBase/blob/00af181/packages/database/src/Database/Reference/Reference.ts#L26)*

**Returns:** `Path`

___
<a id="key"></a>

###  key

▸ **key**(): `string`

*Implementation of [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md).[key](../interfaces/_database_reference_referenceinterface_.referenceinterface.md#key)*

*Defined in [Database/Reference/Reference.ts:30](https://github.com/chapterjason/APIBase/blob/00af181/packages/database/src/Database/Reference/Reference.ts#L30)*

**Returns:** `string`

___
<a id="parent"></a>

###  parent

▸ **parent**<`ParentReferenceType`>():  [Reference](_database_reference_reference_.reference.md)<`ParentReferenceType`> &#124; `null`

*Implementation of [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md).[parent](../interfaces/_database_reference_referenceinterface_.referenceinterface.md#parent)*

*Defined in [Database/Reference/Reference.ts:41](https://github.com/chapterjason/APIBase/blob/00af181/packages/database/src/Database/Reference/Reference.ts#L41)*

**Type parameters:**

#### ParentReferenceType 

**Returns:**  [Reference](_database_reference_reference_.reference.md)<`ParentReferenceType`> &#124; `null`

___
<a id="reference"></a>

###  reference

▸ **reference**<`ReferenceType`>(segment: *`string`*): [Reference](_database_reference_reference_.reference.md)<`ReferenceType`>

*Implementation of [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md).[reference](../interfaces/_database_reference_referenceinterface_.referenceinterface.md#reference)*

*Defined in [Database/Reference/Reference.ts:51](https://github.com/chapterjason/APIBase/blob/00af181/packages/database/src/Database/Reference/Reference.ts#L51)*

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

▸ **set**(value: *`ReferenceType`*): `boolean`

*Implementation of [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md).[set](../interfaces/_database_reference_referenceinterface_.referenceinterface.md#set)*

*Defined in [Database/Reference/Reference.ts:59](https://github.com/chapterjason/APIBase/blob/00af181/packages/database/src/Database/Reference/Reference.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `ReferenceType` |

**Returns:** `boolean`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): [ReferenceJSON](../interfaces/_database_reference_referenceinterface_.referencejson.md)

*Implementation of [ReferenceInterface](../interfaces/_database_reference_referenceinterface_.referenceinterface.md).[toJSON](../interfaces/_database_reference_referenceinterface_.referenceinterface.md#tojson)*

*Defined in [Database/Reference/Reference.ts:34](https://github.com/chapterjason/APIBase/blob/00af181/packages/database/src/Database/Reference/Reference.ts#L34)*

**Returns:** [ReferenceJSON](../interfaces/_database_reference_referenceinterface_.referencejson.md)

___

