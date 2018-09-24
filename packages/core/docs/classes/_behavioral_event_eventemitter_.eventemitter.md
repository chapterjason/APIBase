[@apibase/core](../README.md) > ["Behavioral/Event/EventEmitter"](../modules/_behavioral_event_eventemitter_.md) > [EventEmitter](../classes/_behavioral_event_eventemitter_.eventemitter.md)

# Class: EventEmitter

## Hierarchy

**EventEmitter**

## Index

### Properties

* [events](_behavioral_event_eventemitter_.eventemitter.md#events)

### Methods

* [emit](_behavioral_event_eventemitter_.eventemitter.md#emit)
* [off](_behavioral_event_eventemitter_.eventemitter.md#off)
* [on](_behavioral_event_eventemitter_.eventemitter.md#on)
* [once](_behavioral_event_eventemitter_.eventemitter.md#once)

---

## Properties

<a id="events"></a>

### `<Protected>` events

**● events**: *[EventIndex](../interfaces/_behavioral_event_eventemitter_.eventindex.md)*

*Defined in [Behavioral/Event/EventEmitter.ts:11](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Behavioral/Event/EventEmitter.ts#L11)*

___

## Methods

<a id="emit"></a>

###  emit

▸ **emit**(event: *[EventInterface](../interfaces/_behavioral_event_eventinterface_.eventinterface.md)*): `void`

*Defined in [Behavioral/Event/EventEmitter.ts:25](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Behavioral/Event/EventEmitter.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | [EventInterface](../interfaces/_behavioral_event_eventinterface_.eventinterface.md) |

**Returns:** `void`

___
<a id="off"></a>

###  off

▸ **off**(handler: *[EventHandlerType](../modules/_behavioral_event_eventemitter_.md#eventhandlertype)*): `void`

*Defined in [Behavioral/Event/EventEmitter.ts:34](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Behavioral/Event/EventEmitter.ts#L34)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| handler | [EventHandlerType](../modules/_behavioral_event_eventemitter_.md#eventhandlertype) |

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(event: *`string`*, handler: *[EventHandlerType](../modules/_behavioral_event_eventemitter_.md#eventhandlertype)*): `void`

*Defined in [Behavioral/Event/EventEmitter.ts:13](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Behavioral/Event/EventEmitter.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `string` |
| handler | [EventHandlerType](../modules/_behavioral_event_eventemitter_.md#eventhandlertype) |

**Returns:** `void`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string`*, handler: *[EventHandlerType](../modules/_behavioral_event_eventemitter_.md#eventhandlertype)*): `void`

*Defined in [Behavioral/Event/EventEmitter.ts:47](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Behavioral/Event/EventEmitter.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `string` |
| handler | [EventHandlerType](../modules/_behavioral_event_eventemitter_.md#eventhandlertype) |

**Returns:** `void`

___

