// 表示FiberNode的标记
export type Flags = number;

export const NoFlags = 0b000000000000000000000000;
// 表示插入
export const Placement = 0b000000000000000000000001;
// 表示更新
export const Update = 0b000000000000000000000010;
// 表示删除
export const ChildDeletion = 0b000000000000000000000100;
