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

*Defined in [Database/DatabaseInterface.ts:19](https://github.com/chapterjason/APIBase/blob/f597d69/packages/database/src/Database/DatabaseInterface.ts#L19)*

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

▸ **delete**(path?: * `Path` &#124; `string` &#124; `string`[]*):  `boolean` &#124; `Promise`<`boolean`>

*Defined in [Database/DatabaseInterface.ts:11](https://github.com/chapterjason/APIBase/blob/f597d69/packages/database/src/Database/DatabaseInterface.ts#L11)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path |  `Path` &#124; `string` &#124; `string`[]|

**Returns:**  `boolean` &#124; `Promise`<`boolean`>

___
<a id="get"></a>

###  get

▸ **get**<`T`>(path?: * `Path` &#124; `string` &#124; `string`[]*):  `T` &#124; `Promise`<`T`>

*Defined in [Database/DatabaseInterface.ts:15](https://github.com/chapterjason/APIBase/blob/f597d69/packages/database/src/Database/DatabaseInterface.ts#L15)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path |  `Path` &#124; `string` &#124; `string`[]|

**Returns:**  `T` &#124; `Promise`<`T`>

___
<a id="reference"></a>

###  reference

▸ **reference**<`ReferenceType`>(path?: * `Path` &#124; `string` &#124; `string`[]*): [ReferenceInterface](_database_reference_referenceinterface_.referenceinterface.md)<`ReferenceType`>

*Defined in [Database/DatabaseInterface.ts:17](https://github.com/chapterjason/APIBase/blob/f597d69/packages/database/src/Database/DatabaseInterface.ts#L17)*

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

▸ **set**(path: * `Path` &#124; `string` &#124; `string`[]*, value: *`any`*):  `boolean` &#124; `Promise`<`boolean`>

*Defined in [Database/DatabaseInterface.ts:13](https://github.com/chapterjason/APIBase/blob/f597d69/packages/database/src/Database/DatabaseInterface.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path |  `Path` &#124; `string` &#124; `string`[]|
| value | `any` |

**Returns:**  `boolean` &#124; `Promise`<`boolean`>

___

