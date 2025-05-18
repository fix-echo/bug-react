
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
- `react-reconciler` 协调器的实现，宿主环境无关
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

