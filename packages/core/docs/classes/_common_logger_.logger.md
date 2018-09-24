[@apibase/core](../README.md) > ["Common/Logger"](../modules/_common_logger_.md) > [Logger](../classes/_common_logger_.logger.md)

# Class: Logger

## Hierarchy

**Logger**

## Index

### Properties

* [level](_common_logger_.logger.md#level)

### Methods

* [debug](_common_logger_.logger.md#debug)
* [error](_common_logger_.logger.md#error)
* [getTimestamp](_common_logger_.logger.md#gettimestamp)
* [info](_common_logger_.logger.md#info)
* [internalLog](_common_logger_.logger.md#internallog)
* [log](_common_logger_.logger.md#log)
* [setLogLevel](_common_logger_.logger.md#setloglevel)
* [warn](_common_logger_.logger.md#warn)

---

## Properties

<a id="level"></a>

### `<Static>``<Protected>` level

**● level**: *[LogLevel](../enums/_common_logger_.loglevel.md)* =  LogLevel.LLL

*Defined in [Common/Logger.ts:23](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Common/Logger.ts#L23)*

___

## Methods

<a id="debug"></a>

### `<Static>` debug

▸ **debug**(message: *`any`*, ...messages: *`any`[]*): `void`

*Defined in [Common/Logger.ts:53](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Common/Logger.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| message | `any` |
| `Rest` messages | `any`[] |

**Returns:** `void`

___
<a id="error"></a>

### `<Static>` error

▸ **error**(message: *`any`*, ...messages: *`any`[]*): `void`

*Defined in [Common/Logger.ts:29](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Common/Logger.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| message | `any` |
| `Rest` messages | `any`[] |

**Returns:** `void`

___
<a id="gettimestamp"></a>

### `<Static>``<Protected>` getTimestamp

▸ **getTimestamp**(): `string`

*Defined in [Common/Logger.ts:59](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Common/Logger.ts#L59)*

**Returns:** `string`

___
<a id="info"></a>

### `<Static>` info

▸ **info**(message: *`any`*, ...messages: *`any`[]*): `void`

*Defined in [Common/Logger.ts:41](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Common/Logger.ts#L41)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| message | `any` |
| `Rest` messages | `any`[] |

**Returns:** `void`

___
<a id="internallog"></a>

### `<Static>``<Protected>` internalLog

▸ **internalLog**(type: *`string`*, ...messages: *`any`[]*): `void`

*Defined in [Common/Logger.ts:73](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Common/Logger.ts#L73)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| `Rest` messages | `any`[] |

**Returns:** `void`

___
<a id="log"></a>

### `<Static>` log

▸ **log**(message: *`any`*, ...messages: *`any`[]*): `void`

*Defined in [Common/Logger.ts:47](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Common/Logger.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| message | `any` |
| `Rest` messages | `any`[] |

**Returns:** `void`

___
<a id="setloglevel"></a>

### `<Static>` setLogLevel

▸ **setLogLevel**(level: *[LogLevel](../enums/_common_logger_.loglevel.md)*): `void`

*Defined in [Common/Logger.ts:25](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Common/Logger.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| level | [LogLevel](../enums/_common_logger_.loglevel.md) |

**Returns:** `void`

___
<a id="warn"></a>

### `<Static>` warn

▸ **warn**(message: *`any`*, ...messages: *`any`[]*): `void`

*Defined in [Common/Logger.ts:35](https://github.com/chapterjason/APIBase/blob/f39c9da/packages/core/src/Common/Logger.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| message | `any` |
| `Rest` messages | `any`[] |

**Returns:** `void`

___

