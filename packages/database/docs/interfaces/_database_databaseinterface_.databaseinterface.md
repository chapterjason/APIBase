[@apibase/database](../README.md) > ["Database/DatabaseInterface"](../modules/_database_databaseinterface_.md) > [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md)

# Interface: DatabaseInterface

## Hierarchy

**DatabaseInterface**

## Implemented by

* [Database](../classes/_database_database_.database.md)

## Index

### Methods

* [applyChanges](_database_databaseinterface_.databaseinterface.md#applychanges)
* [applyDelete](_database_databaseinterface_.databaseinterface.md#applydelete)
* [applySet](_database_databaseinterface_.databaseinterface.md#applyset)
* [collection](_database_databaseinterface_.databaseinterface.md#collection)
* [delete](_database_databaseinterface_.databaseinterface.md#delete)
* [get](_database_databaseinterface_.databaseinterface.md#get)
* [reference](_database_databaseinterface_.databaseinterface.md#reference)
* [set](_database_databaseinterface_.databaseinterface.md#set)

---

## Methods

<a id="applychanges"></a>

###  applyChanges

▸ **applyChanges**(changes: *`Map`<`string`, [ChangeInterface](_database_change_changeinterface_.changeinterface.md)>*): `Promise`<`void`>

*Defined in [Database/DatabaseInterface.ts:24](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/DatabaseInterface.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| changes | `Map`<`string`, [ChangeInterface](_database_change_changeinterface_.changeinterface.md)> |

**Returns:** `Promise`<`void`>

___
<a id="applydelete"></a>

###  applyDelete

▸ **applyDelete**(change: *[DeleteChange](../classes/_database_change_deletechange_.deletechange.md)*): `Promise`<`boolean`>

*Defined in [Database/DatabaseInterface.ts:28](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/DatabaseInterface.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| change | [DeleteChange](../classes/_database_change_deletechange_.deletechange.md) |

**Returns:** `Promise`<`boolean`>

___
<a id="applyset"></a>

###  applySet

▸ **applySet**(change: *[CreateChange](../classes/_database_change_createchange_.createchange.md)*): `Promise`<`boolean`>

*Defined in [Database/DatabaseInterface.ts:26](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/DatabaseInterface.ts#L26)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| change | [CreateChange](../classes/_database_change_createchange_.createchange.md) |

**Returns:** `Promise`<`boolean`>

___
<a id="collection"></a>

###  collection

▸ **collection**<`ReferenceType`>(path?: *`PathType`*): [CollectionReferenceInterface](_database_reference_collectionreferenceinterface_.collectionreferenceinterface.md)<`ReferenceType`>

*Defined in [Database/DatabaseInterface.ts:22](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/DatabaseInterface.ts#L22)*

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

*Defined in [Database/DatabaseInterface.ts:14](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/DatabaseInterface.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path | `PathType` |

**Returns:** `Promise`<`boolean`>

___
<a id="get"></a>

###  get

▸ **get**<`T`>(path?: *`PathType`*): `Promise`<`T`>

*Defined in [Database/DatabaseInterface.ts:18](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/DatabaseInterface.ts#L18)*

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

*Defined in [Database/DatabaseInterface.ts:20](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/DatabaseInterface.ts#L20)*

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

*Defined in [Database/DatabaseInterface.ts:16](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/DatabaseInterface.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `PathType` |
| value | `any` |

**Returns:** `Promise`<`boolean`>

___

