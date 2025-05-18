// ReactElement

import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";
import type {
	ElementType,
	Key,
	Props,
	ReactElement as ReactElementImpl,
	Ref,
	Type,
} from "shared/ReactTypes";

const ReactElement = (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props,
): ReactElementImpl => {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: "react",
	};

	return element;
};

export const jsx = (
	type: ElementType,
	config: any,
	...maybeChildren: any[]
) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	// 遍历config对象，将key、ref、props等属性添加到ReactElement中
	for (const prop in config) {
		const val = config[prop];
		if (prop === "key") {
			if (val !== undefined) {
				key = `${val}`;
			}
			continue;
		}

		if (prop === "ref") {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}

		// 如果是自己定义的属性，则添加到props中
		if (Object.prototype.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		// children length === 1
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}

	return ReactElement(type, key, ref, props);
};

export const jsxDEV = (type: ElementType, config: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	// 遍历config对象，将key、ref、props等属性添加到ReactElement中
	for (const prop in config) {
		const val = config[prop];
		if (prop === "key") {
			if (val !== undefined) {
				key = `${val}`;
			}
			continue;
		}

		if (prop === "ref") {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}

		// 如果是自己定义的属性，则添加到props中
		if (Object.prototype.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	return ReactElement(type, key, ref, props);
};
