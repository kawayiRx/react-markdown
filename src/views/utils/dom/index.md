# 数组工具方法

- 圣杯模式的继承

```typescript
function inherit(Target, Origin) {
  function F() {}
  F.prototype = Origin.prototype
  // eslint-disable-next-line no-param-reassign
  Target.prototype = new F()
  // eslint-disable-next-line no-param-reassign
  Target.prototype.constructor = Target
  // 最终的原型指向
  // eslint-disable-next-line no-param-reassign
  Target.prop.uber = Origin.prototype
}
```

- 找出元素的第 n 级元素

```typescript
function parents(ele, n) {
  while (ele && n) {
    ele = ele.parentElement ? ele.parentElement : ele.parentNode
    n--
  }
  return ele
}
```

- 返回元素的第 n 个兄弟节点

```typescript
function retSibling(e, n) {
  while (e && n) {
    if (n > 0) {
      if (e.nextElementSibling) {
        e = e.nextElementSibling
      } else {
        for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
      }
      n--
    } else {
      if (e.previousElementSibling) {
        e = e.previousElementSibling
      } else {
        for (e = e.previousElementSibling; e && e.nodeType !== 1; e = e.previousElementSibling);
      }
      n++
    }
  }
  return e
}
```

- 封装 mychildren，解决浏览器的兼容问题

```typescript
function myChildren(e) {
  const children = e.childNodes
  const arr = []
  const len = children.length
  for (let i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      arr.push(children[i])
    }
  }
  return arr
}
```

- 判断元素有没有子元素

```typescript
function hasChildren(e) {
  const children = e.childNodes
  const len = children.length
  for (let i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      return true
    }
  }
  return false
}
```

- 我一个元素插入到另一个元素的后面

```typescript
Element.prototype.insertAfter = function (target, elen) {
  const nextElen = elen.nextElenmentSibling
  if (nextElen == null) {
    this.appendChild(target)
  } else {
    this.insertBefore(target, nextElen)
  }
}
```

- 获取滚动条的滚动距离

```typescript
function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  }
  return {
    x: document.body.scrollLeft + document.documentElement.scrollLeft,
    y: document.body.scrollTop + document.documentElement.scrollTop
  }
}
```

- 获得视口的尺寸

```typescript
function getViewportOffset() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    }
  }
  // ie8及其以下
  if (document.compatMode === 'BackCompat') {
    // 怪异模式
    return {
      w: document.body.clientWidth,
      h: document.body.clientHeight
    }
  }
  // 标准模式
  return {
    w: document.documentElement.clientWidth,
    h: document.documentElement.clientHeight
  }
}
```

- 获取任一元素的任意属性

```js
function getStyle(elem, prop) {
  return window.getComputedStyle
    ? window.getComputedStyle(elem, null)[prop]
    : elem.currentStyle[prop]
}
```

- 绑定事件的兼容代码

```typescript
function addEvent(elem, type, handle) {
  if (elem.addEventListener) {
    // 非ie和非ie9
    elem.addEventListener(type, handle, false)
  } else if (elem.attachEvent) {
    // ie6到ie8
    elem.attachEvent(`on${type}`, () => {
      handle.call(elem)
    })
  } else {
    elem[`on${type}`] = handle
  }
}
```

- 解绑事件

```typescript
function removeEvent(elem, type, handle) {
  if (elem.removeEventListener) {
    // 非ie和非ie9
    elem.removeEventListener(type, handle, false)
  } else if (elem.detachEvent) {
    // ie6到ie8
    elem.detachEvent(`on${type}`, handle)
  } else {
    elem[`on${type}`] = null
  }
}
```

- 取消冒泡的兼容代码

```typescript
function stopBubble(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation()
  } else {
    window.event.cancelBubble = true
  }
}
```

- 兼容 getElementsByClassName 方法

```typescript
Element.prototype.getElementsByClassName = Document.prototype.getElementsByClassName = function (
  _className
) {
  const allDomArray = document.getElementsByTagName('*')
  const lastDomArray = []
  function trimSpace(strClass) {
    const reg = /\s+/g
    return strClass.replace(reg, ' ').trim()
  }
  for (let i = 0; i < allDomArray.length; i++) {
    const classArray = trimSpace(allDomArray[i].className).split(' ')
    for (let j = 0; j < classArray.length; j++) {
      if (classArray[j] == _className) {
        lastDomArray.push(allDomArray[i])
        break
      }
    }
  }
  return lastDomArray
}
```

- 便利 DOM 树

```typescript
// 给定页面上的DOM元素,将访问元素本身及其所有后代(不仅仅是它的直接子元素)
// 对于每个访问的元素，函数讲元素传递给提供的回调函数
function traverse(element, callback) {
  callback(element)
  const list = element.children
  for (let i = 0; i < list.length; i++) {
    traverse(list[i], callback)
  }
}
```
