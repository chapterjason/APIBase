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
* [eventEmitters](_database_database_.database.md#eventemitters)
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
* [getEventEmitters](_database_database_.database.md#geteventemitters)
* [getMapping](_database_database_.database.md#getmapping)
* [off](_database_database_.database.md#off)
* [on](_database_database_.database.md#on)
* [once](_database_database_.database.md#once)
* [reference](_database_database_.database.md#reference)
* [set](_database_database_.database.md#set)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Database**(mapping?: *[DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md)*): [Database](_database_database_.database.md)

*Defined in [Database/Database.ts:32](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L32)*

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

*Defined in [Database/Database.ts:30](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L30)*

___
<a id="depthlimit"></a>

### `<Protected>` depthLimit

**● depthLimit**: *`number`* = 32

*Defined in [Database/Database.ts:28](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L28)*

___
<a id="eventemitters"></a>

### `<Protected>` eventEmitters

**● eventEmitters**: *`object`*

*Defined in [Database/Database.ts:32](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L32)*

#### Type declaration

[path: `string`]: `EventEmitter`

___
<a id="mapping"></a>

### `<Protected>` mapping

**● mapping**: *[DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md)*

*Defined in [Database/Database.ts:26](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L26)*

___
<a id="original"></a>

### `<Protected>` original

**● original**: *[DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md)*

*Defined in [Database/Database.ts:24](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L24)*

___

## Methods

<a id="applychanges"></a>

###  applyChanges

▸ **applyChanges**(changes: *`Map`<`string`, [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)>*): `Promise`<`void`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[applyChanges](../interfaces/_database_databaseinterface_.databaseinterface.md#applychanges)*

*Defined in [Database/Database.ts:88](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L88)*

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

*Defined in [Database/Database.ts:220](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L220)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| change | [DeleteChange](_database_change_deletechange_.deletechange.md) |

**Returns:** `Promise`<`boolean`>

___
<a id="applyset"></a>

###  applySet

▸ **applySet**(change: * [CreateChange](_database_change_createchange_.createchange.md) &#124; [UpdateChange](_database_change_updatechange_.updatechange.md)*): `Promise`<`boolean`>

*Defined in [Database/Database.ts:150](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L150)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| change |  [CreateChange](_database_change_createchange_.createchange.md) &#124; [UpdateChange](_database_change_updatechange_.updatechange.md)|

**Returns:** `Promise`<`boolean`>

___
<a id="cleanupchanges"></a>

### `<Protected>` cleanupChanges

▸ **cleanupChanges**(): `void`

*Defined in [Database/Database.ts:267](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L267)*

**Returns:** `void`

___
<a id="collection"></a>

###  collection

▸ **collection**<`ReferenceType`>(path?: *`PathType`*): [CollectionReference](_database_reference_collectionreference_.collectionreference.md)<`ReferenceType`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[collection](../interfaces/_database_databaseinterface_.databaseinterface.md#collection)*

*Defined in [Database/Database.ts:216](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L216)*

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

*Defined in [Database/Database.ts:110](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L110)*

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

*Defined in [Database/Database.ts:189](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L189)*

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

*Defined in [Database/Database.ts:43](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L43)*

**Returns:** `Promise`<`Map`<`string`, [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)>>

___
<a id="geteventemitters"></a>

### `<Protected>` getEventEmitters

▸ **getEventEmitters**(path: *`Path`*): `EventEmitter`[]

*Defined in [Database/Database.ts:254](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L254)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `Path` |

**Returns:** `EventEmitter`[]

___
<a id="getmapping"></a>

###  getMapping

▸ **getMapping**(): `Promise`<[DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md)>

*Defined in [Database/Database.ts:39](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L39)*

**Returns:** `Promise`<[DatabaseIndex](../interfaces/_database_databaseinterface_.databaseindex.md)>

___
<a id="off"></a>

###  off

▸ **off**(callback: *`EventHandlerType`*): `void`

*Defined in [Database/Database.ts:81](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L81)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `EventHandlerType` |

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(event: *"create"*, path: *`PathType`*, callback: *`EventHandlerType`*): `any`

▸ **on**(event: *"update"*, path: *`PathType`*, callback: *`EventHandlerType`*): `any`

▸ **on**(event: *"delete"*, path: *`PathType`*, callback: *`EventHandlerType`*): `any`

*Defined in [Database/Database.ts:47](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "create" |
| path | `PathType` |
| callback | `EventHandlerType` |

**Returns:** `any`

*Defined in [Database/Database.ts:49](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "update" |
| path | `PathType` |
| callback | `EventHandlerType` |

**Returns:** `any`

*Defined in [Database/Database.ts:51](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "delete" |
| path | `PathType` |
| callback | `EventHandlerType` |

**Returns:** `any`

___
<a id="once"></a>

###  once

▸ **once**(event: *"create"*, path: *`PathType`*, callback: *`EventHandlerType`*): `any`

▸ **once**(event: *"update"*, path: *`PathType`*, callback: *`EventHandlerType`*): `any`

▸ **once**(event: *"delete"*, path: *`PathType`*, callback: *`EventHandlerType`*): `any`

*Defined in [Database/Database.ts:64](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L64)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "create" |
| path | `PathType` |
| callback | `EventHandlerType` |

**Returns:** `any`

*Defined in [Database/Database.ts:66](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "update" |
| path | `PathType` |
| callback | `EventHandlerType` |

**Returns:** `any`

*Defined in [Database/Database.ts:68](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "delete" |
| path | `PathType` |
| callback | `EventHandlerType` |

**Returns:** `any`

___
<a id="reference"></a>

###  reference

▸ **reference**<`ReferenceType`>(path?: *`PathType`*): [Reference](_database_reference_reference_.reference.md)<`ReferenceType`>

*Implementation of [DatabaseInterface](../interfaces/_database_databaseinterface_.databaseinterface.md).[reference](../interfaces/_database_databaseinterface_.databaseinterface.md#reference)*

*Defined in [Database/Database.ts:212](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L212)*

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

*Defined in [Database/Database.ts:124](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Database.ts#L124)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `PathType` |
| value | `any` |

**Returns:** `Promise`<`boolean`>

___

