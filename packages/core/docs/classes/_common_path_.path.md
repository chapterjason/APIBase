[@apibase/core](../README.md) > ["Common/Path"](../modules/_common_path_.md) > [Path](../classes/_common_path_.path.md)

# Class: Path

## Hierarchy

**Path**

## Index

### Constructors

* [constructor](_common_path_.path.md#constructor)

### Properties

* [segments](_common_path_.path.md#segments)

### Methods

* [child](_common_path_.path.md#child)
* [end](_common_path_.path.md#end)
* [getSegments](_common_path_.path.md#getsegments)
* [length](_common_path_.path.md#length)
* [parent](_common_path_.path.md#parent)
* [toString](_common_path_.path.md#tostring)
* [ensurePath](_common_path_.path.md#ensurepath)
* [normalize](_common_path_.path.md#normalize)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Path**(path?: * `string` &#124; `string`[]*): [Path](_common_path_.path.md)

*Defined in [Common/Path.ts:13](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/core/src/Common/Path.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path |  `string` &#124; `string`[]|

**Returns:** [Path](_common_path_.path.md)

___

## Properties

<a id="segments"></a>

### `<Protected>` segments

**● segments**: *`string`[]*

*Defined in [Common/Path.ts:13](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/core/src/Common/Path.ts#L13)*

___

## Methods

<a id="child"></a>

###  child

▸ **child**(segment: *`string`*): [Path](_common_path_.path.md)

*Defined in [Common/Path.ts:59](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/core/src/Common/Path.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| segment | `string` |

**Returns:** [Path](_common_path_.path.md)

___
<a id="end"></a>

###  end

▸ **end**():  `string` &#124; `null`

*Defined in [Common/Path.ts:67](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/core/src/Common/Path.ts#L67)*

**Returns:**  `string` &#124; `null`

___
<a id="getsegments"></a>

###  getSegments

▸ **getSegments**(): `string`[]

*Defined in [Common/Path.ts:47](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/core/src/Common/Path.ts#L47)*

**Returns:** `string`[]

___
<a id="length"></a>

###  length

▸ **length**(): `number`

*Defined in [Common/Path.ts:63](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/core/src/Common/Path.ts#L63)*

**Returns:** `number`

___
<a id="parent"></a>

###  parent

▸ **parent**():  [Path](_common_path_.path.md) &#124; `null`

*Defined in [Common/Path.ts:51](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/core/src/Common/Path.ts#L51)*

**Returns:**  [Path](_common_path_.path.md) &#124; `null`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [Common/Path.ts:43](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/core/src/Common/Path.ts#L43)*

**Returns:** `string`

___
<a id="ensurepath"></a>

### `<Static>` ensurePath

▸ **ensurePath**(path: * [Path](_common_path_.path.md) &#124; `string` &#124; `string`[]*): [Path](_common_path_.path.md)

*Defined in [Common/Path.ts:25](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/core/src/Common/Path.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path |  [Path](_common_path_.path.md) &#124; `string` &#124; `string`[]|

**Returns:** [Path](_common_path_.path.md)

___
<a id="normalize"></a>

### `<Static>``<Protected>` normalize

▸ **normalize**(segment: * `string` &#124; `string`[]*): `string`[]

*Defined in [Common/Path.ts:33](https://github.com/chapterjason/APIBase/blob/2632bf5/packages/core/src/Common/Path.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| segment |  `string` &#124; `string`[]|

**Returns:** `string`[]

___

