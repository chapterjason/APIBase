[@apibase/database](../README.md) > ["Database/DatabaseInterface"](../modules/_database_databaseinterface_.md) > [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md)

# Interface: DatabaseInterface

## Hierarchy

**DatabaseInterface**

## Implemented by

* [Database](../classes/_database_database_.database.md)

## Index

### Methods

* [collection](_database_databaseinterface_.databaseinterface.md#collection)
* [delete](_database_databaseinterface_.databaseinterface.md#delete)
* [get](_database_databaseinterface_.databaseinterface.md#get)
* [reference](_database_databaseinterface_.databaseinterface.md#reference)
* [set](_database_databaseinterface_.databaseinterface.md#set)

---

## Methods

<a id="collection"></a>

###  collection

▸ **collection**<`ReferenceType`>(path?: *`PathType`*): [CollectionReferenceInterface](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md)<`ReferenceType`>

*Defined in [Database/DatabaseInterface.ts:19](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/DatabaseInterface.ts#L19)*

**Type parameters:**

#### ReferenceType 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path | `PathType` |

**Returns:** [CollectionReferenceInterface](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md)<`ReferenceType`>

___
<a id="delete"></a>

###  delete

▸ **delete**(path?: *`PathType`*): `Promise`<`boolean`>

*Defined in [Database/DatabaseInterface.ts:11](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/DatabaseInterface.ts#L11)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path | `PathType` |

**Returns:** `Promise`<`boolean`>

___
<a id="get"></a>

###  get

▸ **get**<`T`>(path?: *`PathType`*): `Promise`<`T`>

*Defined in [Database/DatabaseInterface.ts:15](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/DatabaseInterface.ts#L15)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path | `PathType` |

**Returns:** `Promise`<`T`>

___
<a id="reference"></a>

###  reference

▸ **reference**<`ReferenceType`>(path?: *`PathType`*): [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ReferenceType`>

*Defined in [Database/DatabaseInterface.ts:17](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/DatabaseInterface.ts#L17)*

**Type parameters:**

#### ReferenceType 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path | `PathType` |

**Returns:** [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ReferenceType`>

___
<a id="set"></a>

###  set

▸ **set**(path: *`PathType`*, value: *`any`*): `Promise`<`boolean`>

*Defined in [Database/DatabaseInterface.ts:13](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/database/src/Database/DatabaseInterface.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `PathType` |
| value | `any` |

**Returns:** `Promise`<`boolean`>

___

