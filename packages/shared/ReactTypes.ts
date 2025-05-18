export type Type = any; // 元素类型
export type Key = any; // 元素的key
export type Ref = any; // 元素的ref
export type Props = any; // 元素的props
export type ElementType = any; // 元素类型

export interface ReactElement {
	$$typeof: symbol | number;
	type: Type;
	key: Key;
	ref: Ref;
	props: Props;
	__mark: string;
}
