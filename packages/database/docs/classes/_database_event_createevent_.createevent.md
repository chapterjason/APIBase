[@apibase/database](../README.md) > ["Database/Event/CreateEvent"](../modules/_database_event_createevent_.md) > [CreateEvent](../classes/_database_event_createevent_.createevent.md)

# Class: CreateEvent

## Hierarchy

↳  [DatabaseEvent](_database_event_databaseevent_.databaseevent.md)

**↳ CreateEvent**

## Implements

* `EventInterface`

## Index

### Constructors

* [constructor](_database_event_createevent_.createevent.md#constructor)

### Properties

* [change](_database_event_createevent_.createevent.md#change)
* [type](_database_event_createevent_.createevent.md#type)

### Methods

* [getChange](_database_event_createevent_.createevent.md#getchange)
* [getType](_database_event_createevent_.createevent.md#gettype)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CreateEvent**(change: *[CreateChange](_database_change_createchange_.createchange.md)*): [CreateEvent](_database_event_createevent_.createevent.md)

*Overrides [DatabaseEvent](_database_event_databaseevent_.databaseevent.md).[constructor](_database_event_databaseevent_.databaseevent.md#constructor)*

*Defined in [Database/Event/CreateEvent.ts:6](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Event/CreateEvent.ts#L6)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| change | [CreateChange](_database_change_createchange_.createchange.md) |

**Returns:** [CreateEvent](_database_event_createevent_.createevent.md)

___

## Properties

<a id="change"></a>

### `<Protected>` change

**● change**: *[CreateChange](_database_change_createchange_.createchange.md)*

*Overrides [DatabaseEvent](_database_event_databaseevent_.databaseevent.md).[change](_database_event_databaseevent_.databaseevent.md#change)*

*Defined in [Database/Event/CreateEvent.ts:6](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/database/src/Database/Event/CreateEvent.ts#L6)*

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

