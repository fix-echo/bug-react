// 表示FiberNode的类型
export type WorkTag =
	| typeof FunctionComponent
	| typeof HostRoot
	| typeof HostComponent
	| typeof HostText;

// 函数组件
export const FunctionComponent = 0;
// 宿主环境根节点
export const HostRoot = 3;
// 宿主环境DOM节点
export const HostComponent = 5;
// 文本节点
export const HostText = 6;
