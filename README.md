
## commit-msg type:
- feat: 添加新功能
- fix: 修复 Bug
- chore: 一些不影响功能的更改
- docs: 专指文档的修改
- perf: 性能方面的优化
- refactor: 代码重构
- test: 添加一些测试代码等等


## React项目结构

- `react` 宿主环境无关的公用方法
- `react-reconciler` diff算法 协调器的实现，宿主环境无关
- `各种宿主环境的包
- `shared` 公用辅助方法，宿主环境无关

## JSX转换包含两部分

- 编译时：babel编译实现
- 运行时：jsx方法或React.createElement方法的实现（包含dev、prod两个环境）


## 为什么我们直接导出函数就行

```
JSX 源码
   ↓
Babel 解析为 AST
   ↓
JSX 转换插件处理
   ↓
生成 React.createElement 调用
   ↓
最终 JavaScript 代码
```
这是整个流程，JSX源码，然后Babel解析为AST抽象语法树，JSX转换插件做处理(也就是编译时的babel/react-plugin) -> 然后调用我们的React.createElement -> 最后生成JS代码


## react是纯运行时前端框架，它没有编译优化
核心模块可以开放通用API，供不同环境使用，这样可以支持不同环境


jsx经过babel的编译编程React.createElement的调用，调用返回ReactElement，由于ReactElement没办法表示节点之间的关系，或者节点的状态，所以引入了FiberNode，最后FiberNode经由reconciler做diff算法经过宿主环境最后渲染为DOMElement展示在页面上


workInProgress树身上包含很多标记，这些就对应宿主环境上的API，根据宿主环境就可以渲染到真实DOM上面，替换掉current树，这种技术就叫双缓存

在对比的时候使用深度优先遍历的方式，有子节点遍历子节点，没有子节点遍历兄弟节点

遍历分为递归两个阶段，递就是从父到子，归就是从子到父node，对应关系：
- 递：对应`beginWork`
- 归：对应`completeWork`


