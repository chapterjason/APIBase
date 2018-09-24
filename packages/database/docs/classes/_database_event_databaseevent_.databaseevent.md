[@apibase/database](../README.md) > ["Database/Event/DatabaseEvent"](../modules/_database_event_databaseevent_.md) > [DatabaseEvent](../classes/_database_event_databaseevent_.databaseevent.md)

# Class: DatabaseEvent

## Hierarchy

 `Event`

**↳ DatabaseEvent**

↳  [DeleteEvent](_database_event_deleteevent_.deleteevent.md)

↳  [UpdateEvent](_database_event_updateevent_.updateevent.md)

↳  [CreateEvent](_database_event_createevent_.createevent.md)

## Implements

* `EventInterface`

## Index

### Constructors

* [constructor](_database_event_databaseevent_.databaseevent.md#constructor)

### Properties

* [change](_database_event_databaseevent_.databaseevent.md#change)
* [type](_database_event_databaseevent_.databaseevent.md#type)

### Methods

* [getChange](_database_event_databaseevent_.databaseevent.md#getchange)
* [getType](_database_event_databaseevent_.databaseevent.md#gettype)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DatabaseEvent**(type: *`string`*, change: *[ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)*): [DatabaseEvent](_database_event_databaseevent_.databaseevent.md)

*Overrides Event.__constructor*

*Defined in [Database/Event/DatabaseEvent.ts:6](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Event/DatabaseEvent.ts#L6)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| change | [ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md) |

**Returns:** [DatabaseEvent](_database_event_databaseevent_.databaseevent.md)

___

## Properties

<a id="change"></a>

### `<Protected>` change

**● change**: *[ChangeInterface](../interfaces/_database_change_changeinterface_.changeinterface.md)*

*Defined in [Database/Event/DatabaseEvent.ts:6](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Event/DatabaseEvent.ts#L6)*

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
