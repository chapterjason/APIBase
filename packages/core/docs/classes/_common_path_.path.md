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

⊕ **new Path**(path?: *[PathType](../modules/_common_path_.md#pathtype)*): [Path](_common_path_.path.md)

*Defined in [Common/Path.ts:14](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/core/src/Common/Path.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` path | [PathType](../modules/_common_path_.md#pathtype) |

**Returns:** [Path](_common_path_.path.md)

___

## Properties

<a id="segments"></a>

### `<Protected>` segments

**● segments**: *`string`[]*

*Defined in [Common/Path.ts:14](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/core/src/Common/Path.ts#L14)*

___

## Methods

<a id="child"></a>

###  child

▸ **child**(segment: *`string`*): [Path](_common_path_.path.md)

*Defined in [Common/Path.ts:62](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/core/src/Common/Path.ts#L62)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| segment | `string` |

**Returns:** [Path](_common_path_.path.md)

___
<a id="end"></a>

###  end

▸ **end**():  `string` &#124; `null`

*Defined in [Common/Path.ts:70](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/core/src/Common/Path.ts#L70)*

**Returns:**  `string` &#124; `null`

___
<a id="getsegments"></a>

###  getSegments

▸ **getSegments**(): `string`[]

*Defined in [Common/Path.ts:50](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/core/src/Common/Path.ts#L50)*

**Returns:** `string`[]

___
<a id="length"></a>

###  length

▸ **length**(): `number`

*Defined in [Common/Path.ts:66](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/core/src/Common/Path.ts#L66)*

**Returns:** `number`

___
<a id="parent"></a>

###  parent

▸ **parent**():  [Path](_common_path_.path.md) &#124; `null`

*Defined in [Common/Path.ts:54](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/core/src/Common/Path.ts#L54)*

**Returns:**  [Path](_common_path_.path.md) &#124; `null`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [Common/Path.ts:46](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/core/src/Common/Path.ts#L46)*

**Returns:** `string`

___
<a id="ensurepath"></a>

### `<Static>` ensurePath

▸ **ensurePath**(path: *[PathType](../modules/_common_path_.md#pathtype)*): [Path](_common_path_.path.md)

*Defined in [Common/Path.ts:28](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/core/src/Common/Path.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | [PathType](../modules/_common_path_.md#pathtype) |

**Returns:** [Path](_common_path_.path.md)

___
<a id="normalize"></a>

### `<Static>``<Protected>` normalize

▸ **normalize**(segment: * `string` &#124; `string`[]*): `string`[]

*Defined in [Common/Path.ts:36](https://github.com/chapterjason/APIBase/blob/54f0c33/packages/core/src/Common/Path.ts#L36)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| segment |  `string` &#124; `string`[]|

**Returns:** `string`[]

___

