- React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同:
  - React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
  - 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。
  - React 对 DOM 事件进行封装，解决跨浏览器问题，并且将组件上的事件绑定在 document 上方便统一处理
