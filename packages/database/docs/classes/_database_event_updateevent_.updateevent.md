[@apibase/database](../README.md) > ["Database/Event/UpdateEvent"](../modules/_database_event_updateevent_.md) > [UpdateEvent](../classes/_database_event_updateevent_.updateevent.md)

# Class: UpdateEvent

## Hierarchy

↳  [DatabaseEvent](_database_event_databaseevent_.databaseevent.md)

**↳ UpdateEvent**

## Implements

* `EventInterface`

## Index

### Constructors

* [constructor](_database_event_updateevent_.updateevent.md#constructor)

### Properties

* [change](_database_event_updateevent_.updateevent.md#change)
* [type](_database_event_updateevent_.updateevent.md#type)

### Methods

* [getChange](_database_event_updateevent_.updateevent.md#getchange)
* [getType](_database_event_updateevent_.updateevent.md#gettype)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UpdateEvent**(change: *[UpdateChange](_database_change_updatechange_.updatechange.md)*): [UpdateEvent](_database_event_updateevent_.updateevent.md)

*Overrides [DatabaseEvent](_database_event_databaseevent_.databaseevent.md).[constructor](_database_event_databaseevent_.databaseevent.md#constructor)*

*Defined in [Database/Event/UpdateEvent.ts:6](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Event/UpdateEvent.ts#L6)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| change | [UpdateChange](_database_change_updatechange_.updatechange.md) |

**Returns:** [UpdateEvent](_database_event_updateevent_.updateevent.md)

___

## Properties

<a id="change"></a>

### `<Protected>` change

**● change**: *[UpdateChange](_database_change_updatechange_.updatechange.md)*

*Overrides [DatabaseEvent](_database_event_databaseevent_.databaseevent.md).[change](_database_event_databaseevent_.databaseevent.md#change)*

*Defined in [Database/Event/UpdateEvent.ts:6](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Event/UpdateEvent.ts#L6)*

___
<a id="type"></a>

### `<Protected>` type

**● type**: *`string`*

*Inherited from Event.type*

*Defined in /home/jason/Projects/github/APIBase/packages/database/node_modules/@apibase/core/dist/Behavioral/Event/Event.d.ts:4*

___

## Methods

<a id="getchange"></a>

###  getChange

▸ **getChange**(): [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)

*Inherited from [DatabaseEvent](_database_event_databaseevent_.databaseevent.md).[getChange](_database_event_databaseevent_.databaseevent.md#getchange)*

*Defined in [Database/Event/DatabaseEvent.ts:13](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Event/DatabaseEvent.ts#L13)*

**Returns:** [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)

___
<a id="gettype"></a>

###  getType

▸ **getType**(): `string`

*Inherited from Event.getType*

*Defined in /home/jason/Projects/github/APIBase/packages/database/node_modules/@apibase/core/dist/Behavioral/Event/Event.d.ts:8*

**Returns:** `string`

___

