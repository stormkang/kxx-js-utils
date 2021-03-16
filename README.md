# kxx-utils
记录自己平时常用的JS工具类库. 便于后面项目开发使用.

## dataType
根据传入的数据, 以字符串形式返回对应数据类型.
### 参数
- data 待获取类型的数据
### 返回值
- 'String', 'Number', 'Array'等数据类型
### 对应代码
```js
const dataType = (data) => {
  const typeStr = Object.prototype.toString.call(data);
  return typeStr.substring(8, typeStr.length - 1);
}
```

## dateFormat
根据传入的日期, 以一定格式返回格式化的字符串日期形式.
默认返回不带时分秒的日期, 如果需要展示, 参数withHms: true即可.
### 参数
- date 传入的日期, 默认当前日期.
- withHms 是否包含时分秒, 默认不包含. 
### 返回值
- 格式化的字符串日期
### 对应代码
```js
const dateFormat = ({date = new Date(), withHms = false} = {}) => {
  const year = date.getFullYear();
  const month = ''.padStart.call(date.getMonth() + 1, 2, 0);
  const day = ''.padStart.call(date.getDate(), 2, 0);
  const hour = ''.padStart.call(date.getHours(), 2, 0);
  const minute = ''.padStart.call(date.getMinutes(), 2, 0);
  const second = ''.padStart.call(date.getSeconds(), 2, 0);
  
  let _date = `${year}-${month}-${day}`;

  if (withHms) {
    return `${_date} ${hour}:${minute}:${second}`;
  } else {
    return _date;
  }
}
```