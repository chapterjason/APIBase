[@apibase/database](../README.md) > ["Database/Database"](../modules/_database_database_.md) > [Database](../classes/_database_database_.database.md)

# Class: Database

## Hierarchy

**Database**

## Implements

* [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md)

## Index

### Constructors

* [constructor](_database_database_.database.md#constructor)

### Properties

* [depthLimit](_database_database_.database.md#depthlimit)
* [mapping](_database_database_.database.md#mapping)

### Methods

* [collection](_database_database_.database.md#collection)
* [delete](_database_database_.database.md#delete)
* [get](_database_database_.database.md#get)
* [reference](_database_database_.database.md#reference)
* [set](_database_database_.database.md#set)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Database**(mapping?: *[DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md)*): [Database](_database_database_.database.md)

*Defined in [Database/Database.ts:19](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Database.ts#L19)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` mapping | [DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md) |  {} |

**Returns:** [Database](_database_database_.database.md)

___

## Properties

<a id="depthlimit"></a>

### `<Protected>` depthLimit

**● depthLimit**: *`number`* = 32

*Defined in [Database/Database.ts:19](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Database.ts#L19)*

___
<a id="mapping"></a>

### `<Protected>` mapping

**● mapping**: *[DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md)*

*Defined in [Database/Database.ts:17](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Database.ts#L17)*

___

## Methods

<a id="collection"></a>

###  collection

▸ **collection**<`ReferenceType`>(path?: * `Path` &#124; `string` &#124; `string`[]*): [CollectionReference](_database_reference_collectionreference_.collectionreference.md)<`ReferenceType`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[collection](../interfaces/_database_databaseinterface_.databaseinterface.md#collection)*

*Defined in [Database/Database.ts:124](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Database.ts#L124)*

**Type parameters:**

#### ReferenceType 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path |  `Path` &#124; `string` &#124; `string`[]|

**Returns:** [CollectionReference](_database_reference_collectionreference_.collectionreference.md)<`ReferenceType`>

___
<a id="delete"></a>

###  delete

▸ **delete**(path?: * `Path` &#124; `string` &#124; `string`[]*): `Promise`<`boolean`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[delete](../interfaces/_database_databaseinterface_.databaseinterface.md#delete)*

*Defined in [Database/Database.ts:25](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Database.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path |  `Path` &#124; `string` &#124; `string`[]|

**Returns:** `Promise`<`boolean`>

___
<a id="get"></a>

###  get

▸ **get**<`T`>(path?: * `Path` &#124; `string` &#124; `string`[]*): `Promise`<`T`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[get](../interfaces/_database_databaseinterface_.databaseinterface.md#get)*

*Defined in [Database/Database.ts:97](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Database.ts#L97)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path |  `Path` &#124; `string` &#124; `string`[]|

**Returns:** `Promise`<`T`>

___
<a id="reference"></a>

###  reference

▸ **reference**<`ReferenceType`>(path?: * `Path` &#124; `string` &#124; `string`[]*): [Reference](_database_reference_reference_.reference.md)<`ReferenceType`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[reference](../interfaces/_database_databaseinterface_.databaseinterface.md#reference)*

*Defined in [Database/Database.ts:120](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Database.ts#L120)*

**Type parameters:**

#### ReferenceType 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path |  `Path` &#124; `string` &#124; `string`[]|

**Returns:** [Reference](_database_reference_reference_.reference.md)<`ReferenceType`>

___
<a id="set"></a>

###  set

▸ **set**(path: * `Path` &#124; `string` &#124; `string`[]*, value: *`any`*): `Promise`<`boolean`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[set](../interfaces/_database_databaseinterface_.databaseinterface.md#set)*

*Defined in [Database/Database.ts:59](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/database/src/Database/Database.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path |  `Path` &#124; `string` &#124; `string`[]|
| value | `any` |

**Returns:** `Promise`<`boolean`>

___

