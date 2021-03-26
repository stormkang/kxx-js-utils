# kxx-js-utils
记录自己平时常用的JS工具类库. 便于后面项目开发使用.


## dataType
根据传入的数据, 以字符串形式返回对应数据类型.
### 参数
- data 待获取类型的数据
### 返回值
- 'String', 'Number', 'Array'等数据类型
### 代码示例
```js
const { dataType } = require('kxx-js-utils');

console.log(dataType('')); // String
console.log(dataType(null)); // Null
console.log(dataType({})); // Object
```

## dateFormat

根据传入的日期, 以一定格式返回格式化的字符串日期形式.
默认返回不带时分秒的日期, 如果需要展示, 参数withHms: true即可.
### 参数

- param.date 传入的日期, 默认当前日期.
- param.withHms 是否包含时分秒, 默认不包含. 
### 返回值
- 格式化的字符串日期
### 示例代码
```js
const { dateFormat } = require('kxx-js-utils');

console.log(dateFormat()); // 2021-03-16
console.log(dateFormat({withHms: true})); // 2021-03-16 15:34:19
```


## sleep
睡眠(暂停)指定时间.
### 参数
- ms 待睡眠的时间
### 返回值
- 无
### 示例代码
```js
const { sleep } = require('kxx-js-utils');

sleep(200); // 睡眠200ms
sleep(3000); // 睡眠3秒
```

