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

*Defined in [Common/Logger.ts:22](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/core/src/Common/Logger.ts#L22)*

___

## Methods

<a id="debug"></a>

### `<Static>` debug

▸ **debug**(message: *`any`*, ...messages: *`any`[]*): `void`

*Defined in [Common/Logger.ts:52](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/core/src/Common/Logger.ts#L52)*

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

*Defined in [Common/Logger.ts:28](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/core/src/Common/Logger.ts#L28)*

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

*Defined in [Common/Logger.ts:58](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/core/src/Common/Logger.ts#L58)*

**Returns:** `string`

___
<a id="info"></a>

### `<Static>` info

▸ **info**(message: *`any`*, ...messages: *`any`[]*): `void`

*Defined in [Common/Logger.ts:40](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/core/src/Common/Logger.ts#L40)*

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

*Defined in [Common/Logger.ts:72](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/core/src/Common/Logger.ts#L72)*

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

*Defined in [Common/Logger.ts:46](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/core/src/Common/Logger.ts#L46)*

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

*Defined in [Common/Logger.ts:24](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/core/src/Common/Logger.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| level | [LogLevel](../enums/_common_logger_.loglevel.md) |

**Returns:** `void`

___
<a id="warn"></a>

### `<Static>` warn

▸ **warn**(message: *`any`*, ...messages: *`any`[]*): `void`

*Defined in [Common/Logger.ts:34](https://github.com/chapterjason/APIBase/blob/e44e28d/packages/core/src/Common/Logger.ts#L34)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| message | `any` |
| `Rest` messages | `any`[] |

**Returns:** `void`

___

