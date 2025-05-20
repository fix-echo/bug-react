// 工作循环

import { beginWork } from "./beginWork";
import { completeWork } from "./completeWork";
import type { FiberNode } from "./fiber";

// 当前正在工作的fiberNode
let workInProgress: FiberNode | null = null;

// 初始化
function prepareRefreshStack(fiber: FiberNode) {
	// 获取当前正在工作的fiberNode
	workInProgress = fiber;
}
function renderRoot(root: FiberNode) {
	// 初始化
	prepareRefreshStack(root);

	// 递归流程
	do {
		try {
			workLoop();
			break;
		} catch (e) {
			console.warn("workLoop发生错误", e);
			workInProgress = null;
		}
		// biome-ignore lint/correctness/noConstantCondition: <explanation>
	} while (true);
}

function workLoop() {
	// 一个循环
	while (workInProgress !== null) {
		performUnitOfWork(workInProgress);
	}
}

function performUnitOfWork(fiber: FiberNode) {
	// 执行fiber的beginWork
	const next: FiberNode | null = beginWork(
		fiber,
	) as unknown as FiberNode | null;
	fiber.memoizedProps = fiber.pendingProps;
	// 表示没有子节点，需要执行completeWork
	if (next === null) {
		completeUnitOfWork(fiber);
	} else {
		workInProgress = next;
	}
}

function completeUnitOfWork(fiber: FiberNode) {
	let node: FiberNode | null = fiber;

	do {
		completeWork(node);

		const sibling = node.sibling;
		// 有兄弟节点，则返回兄弟节点
		if (sibling !== null) {
			workInProgress = sibling;
			return;
		}

		// 没有兄弟节点，则返回父节点
		node = node.return;
	} while (node !== null);
}
