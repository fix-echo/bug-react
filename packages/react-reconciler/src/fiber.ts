// 用于存放FiberNode的数据结构
import type { Key, Props } from "shared/ReactTypes";
import type { Flags } from "./fiberFlags";
import { NoFlags } from "./fiberFlags";
import type { WorkTag } from "./workTags";
export class FiberNode {
	tag: WorkTag;
	pendingProps: Props;
	key: Key;
	stateNode: any;
	type: any;

	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;
	ref: any;

	memoizedProps: Props | null;

	// 双缓存
	alternate: FiberNode | null;

	flags: Flags;
	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		// 实例的属性
		this.tag = tag;
		// 当前组件的props
		this.pendingProps = pendingProps;
		// 当前组件的key
		this.key = key;
		// 当前组件的DOM节点 <div id="123">123</div>
		this.stateNode = null;
		// FunctionComponent () => {}
		this.type = null;

		/**
		 * 表示节点之间的关系
		 */
		// 指向父fiberNode
		this.return = null;
		// 指向右边的兄弟fiberNode
		this.sibling = null;
		// 指向子fiberNode
		this.child = null;
		// 当前fiberNode在兄弟fiberNode中的索引 比如：
		// <div>
		//   <span></span>
		//   <span></span>
		//   <span></span>
		// </div>
		// 索引为0的span是第一个子节点，索引为1的span是第二个子节点，索引为2的span是第三个子节点
		this.index = 0;
		this.ref = null;

		// 作为工作单元
		// 刚开始工作的时候，pendingProps是父组件传递给子组件的props
		this.pendingProps = pendingProps;
		// 工作结束的时候，memoizedProps是子组件传递给父组件的props
		this.memoizedProps = null;

		// 双缓存
		this.alternate = null;

		// 副作用
		this.flags = NoFlags;
	}
}
