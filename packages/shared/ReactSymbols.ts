const supportSymbol = typeof Symbol === "function";

// 如果支持Symbol，则使用Symbol.for("react.element")，否则使用0xeac7作为标识
export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for("react.element")
	: 0xeac7;
