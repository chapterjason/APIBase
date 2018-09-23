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

* [changes](_database_database_.database.md#changes)
* [depthLimit](_database_database_.database.md#depthlimit)
* [mapping](_database_database_.database.md#mapping)
* [original](_database_database_.database.md#original)

### Methods

* [applyChanges](_database_database_.database.md#applychanges)
* [applyDelete](_database_database_.database.md#applydelete)
* [applySet](_database_database_.database.md#applyset)
* [cleanupChanges](_database_database_.database.md#cleanupchanges)
* [collection](_database_database_.database.md#collection)
* [delete](_database_database_.database.md#delete)
* [get](_database_database_.database.md#get)
* [getChanges](_database_database_.database.md#getchanges)
* [getMapping](_database_database_.database.md#getmapping)
* [reference](_database_database_.database.md#reference)
* [set](_database_database_.database.md#set)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Database**(mapping?: *[DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md)*): [Database](_database_database_.database.md)

*Defined in [Database/Database.ts:26](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L26)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` mapping | [DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md) |  {} |

**Returns:** [Database](_database_database_.database.md)

___

## Properties

<a id="changes"></a>

### `<Protected>` changes

**● changes**: *`Map`<`string`, [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)>* =  new Map<string, ChangeInterface>()

*Defined in [Database/Database.ts:26](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L26)*

___
<a id="depthlimit"></a>

### `<Protected>` depthLimit

**● depthLimit**: *`number`* = 32

*Defined in [Database/Database.ts:24](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L24)*

___
<a id="mapping"></a>

### `<Protected>` mapping

**● mapping**: *[DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md)*

*Defined in [Database/Database.ts:22](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L22)*

___
<a id="original"></a>

### `<Protected>` original

**● original**: *[DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md)*

*Defined in [Database/Database.ts:20](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L20)*

___

## Methods

<a id="applychanges"></a>

###  applyChanges

▸ **applyChanges**(changes: *`Map`<`string`, [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)>*): `Promise`<`void`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[applyChanges](../interfaces/_database_databaseinterface_.databaseinterface.md#applychanges)*

*Defined in [Database/Database.ts:41](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L41)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| changes | `Map`<`string`, [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)> |

**Returns:** `Promise`<`void`>

___
<a id="applydelete"></a>

###  applyDelete

▸ **applyDelete**(change: *[DeleteChange](_database_change_deletechange_.deletechange.md)*): `Promise`<`boolean`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[applyDelete](../interfaces/_database_databaseinterface_.databaseinterface.md#applydelete)*

*Defined in [Database/Database.ts:145](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L145)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| change | [DeleteChange](_database_change_deletechange_.deletechange.md) |

**Returns:** `Promise`<`boolean`>

___
<a id="applyset"></a>

###  applySet

▸ **applySet**(change: *[SetChange](_database_change_setchange_.setchange.md)*): `Promise`<`boolean`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[applySet](../interfaces/_database_databaseinterface_.databaseinterface.md#applyset)*

*Defined in [Database/Database.ts:75](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| change | [SetChange](_database_change_setchange_.setchange.md) |

**Returns:** `Promise`<`boolean`>

___
<a id="cleanupchanges"></a>

### `<Protected>` cleanupChanges

▸ **cleanupChanges**(): `void`

*Defined in [Database/Database.ts:179](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L179)*

**Returns:** `void`

___
<a id="collection"></a>

###  collection

▸ **collection**<`ReferenceType`>(path?: *`PathType`*): [CollectionReference](_database_reference_collectionreference_.collectionreference.md)<`ReferenceType`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[collection](../interfaces/_database_databaseinterface_.databaseinterface.md#collection)*

*Defined in [Database/Database.ts:141](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L141)*

**Type parameters:**

#### ReferenceType 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path | `PathType` |

**Returns:** [CollectionReference](_database_reference_collectionreference_.collectionreference.md)<`ReferenceType`>

___
<a id="delete"></a>

###  delete

▸ **delete**(path?: *`PathType`*): `Promise`<`boolean`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[delete](../interfaces/_database_databaseinterface_.databaseinterface.md#delete)*

*Defined in [Database/Database.ts:63](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path | `PathType` |

**Returns:** `Promise`<`boolean`>

___
<a id="get"></a>

###  get

▸ **get**<`T`>(path?: *`PathType`*): `Promise`<`T`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[get](../interfaces/_database_databaseinterface_.databaseinterface.md#get)*

*Defined in [Database/Database.ts:114](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L114)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path | `PathType` |

**Returns:** `Promise`<`T`>

___
<a id="getchanges"></a>

###  getChanges

▸ **getChanges**(): `Promise`<`Map`<`string`, [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)>>

*Defined in [Database/Database.ts:37](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L37)*

**Returns:** `Promise`<`Map`<`string`, [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)>>

___
<a id="getmapping"></a>

###  getMapping

▸ **getMapping**(): `Promise`<[DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md)>

*Defined in [Database/Database.ts:33](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L33)*

**Returns:** `Promise`<[DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md)>

___
<a id="reference"></a>

###  reference

▸ **reference**<`ReferenceType`>(path?: *`PathType`*): [Reference](_database_reference_reference_.reference.md)<`ReferenceType`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[reference](../interfaces/_database_databaseinterface_.databaseinterface.md#reference)*

*Defined in [Database/Database.ts:137](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L137)*

**Type parameters:**

#### ReferenceType 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path | `PathType` |

**Returns:** [Reference](_database_reference_reference_.reference.md)<`ReferenceType`>

___
<a id="set"></a>

###  set

▸ **set**(path: *`PathType`*, value: *`any`*): `Promise`<`boolean`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[set](../interfaces/_database_databaseinterface_.databaseinterface.md#set)*

*Defined in [Database/Database.ts:69](https://github.com/chapterjason/APIBase/blob/4d25de7/packages/database/src/Database/Database.ts#L69)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `PathType` |
| value | `any` |

**Returns:** `Promise`<`boolean`>

___

