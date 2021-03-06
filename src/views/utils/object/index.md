# 对象工具方法

- 深浅拷贝

```typescript
// 深克隆（深克隆不考虑函数）
function deepClone(obj, result) {
  var result = result || {}
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] === 'object' && obj[prop] !== null) {
        // 引用值(obj/array)且不为null
        if (Object.prototype.toString.call(obj[prop]) == '[object Object]') {
          // 对象
          result[prop] = {}
        } else {
          // 数组
          result[prop] = []
        }
        deepClone(obj[prop], result[prop])
      } else {
        // 原始值或func
        result[prop] = obj[prop]
      }
    }
  }
  return result
}

// 深浅克隆是针对引用值
function deepClone2(target) {
  if (typeof target !== 'object') {
    return target
  }
  let result
  if (Object.prototype.toString.call(target) === '[object Array]') {
    // 数组
    result = []
  } else {
    // 对象
    result = {}
  }
  for (const prop in target) {
    if (target.hasOwnProperty(prop)) {
      result[prop] = deepClone2(target[prop])
    }
  }
  return result
}
// 无法复制函数
const o1 = jsON.parse(jsON.stringify(obj1))
```
