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

▸ **collection**<`ReferenceType`>(path?: * `Path` &#124; `string` &#124; `string`[]*): [CollectionReferenceInterface](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md)<`ReferenceType`>

*Defined in [Database/DatabaseInterface.ts:30](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/database/src/Database/DatabaseInterface.ts#L30)*

**Type parameters:**

#### ReferenceType 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path |  `Path` &#124; `string` &#124; `string`[]|

**Returns:** [CollectionReferenceInterface](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md)<`ReferenceType`>

___
<a id="delete"></a>

###  delete

▸ **delete**(path?: * `Path` &#124; `string` &#124; `string`[]*): `Promise`<`boolean`>

*Defined in [Database/DatabaseInterface.ts:22](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/database/src/Database/DatabaseInterface.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path |  `Path` &#124; `string` &#124; `string`[]|

**Returns:** `Promise`<`boolean`>

___
<a id="get"></a>

###  get

▸ **get**<`T`>(path?: * `Path` &#124; `string` &#124; `string`[]*): `Promise`<`T`>

*Defined in [Database/DatabaseInterface.ts:26](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/database/src/Database/DatabaseInterface.ts#L26)*

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

▸ **reference**<`ReferenceType`>(path?: * `Path` &#124; `string` &#124; `string`[]*): [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ReferenceType`>

*Defined in [Database/DatabaseInterface.ts:28](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/database/src/Database/DatabaseInterface.ts#L28)*

**Type parameters:**

#### ReferenceType 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path |  `Path` &#124; `string` &#124; `string`[]|

**Returns:** [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ReferenceType`>

___
<a id="set"></a>

###  set

▸ **set**(path: * `Path` &#124; `string` &#124; `string`[]*, value: *`any`*): `Promise`<`boolean`>

*Defined in [Database/DatabaseInterface.ts:24](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/database/src/Database/DatabaseInterface.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path |  `Path` &#124; `string` &#124; `string`[]|
| value | `any` |

**Returns:** `Promise`<`boolean`>

___

