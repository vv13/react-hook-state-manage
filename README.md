> 使用 React Hook、immer、constate 写的一个 Todo 应用，耗时十分钟。

## 为什么考虑它？
目前 React 应用前端状态管理方案十分多，作为一个 React 爱好者，在以前我也做了许许多多的尝试，在大型项目中一般我会选用 Redux-Saga，因为它功能强大、插件丰富；然而在其他情况，那就比较随意了，除了传统的 Redux，MobX也经常列入我的考虑列表中，然而到了目前的 Hooks 时代，已经有太多的工程与项目开始使用 useContext + useReducer 替代 Redux了，就连 Facebook 官网也开始在研发新的状态管理框架 Recoil，那么我们目前到底应该如何选择呢？


这里有一个简单的状态管理示例，使用了 React Hook 的形式定义数据，并使用 constate 进行管理 Context，这十分简单，需要你掌握的新语法非常少，并且十分轻量级，便于维护与扩展，仅供参考。
