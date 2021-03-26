/**
 * @desc 常用JS工具函数
 * @author stormkang
 * @date Mar 16, 2021 at 09:58 
 */

/**
 * 获取对应数据类型
 * @param {*} data 要获取对应类型的数据
 * @returns {string} 返回对应数据类型
 */
const dataType = (data) => {
  const typeStr = Object.prototype.toString.call(data);
  return typeStr.substring(8, typeStr.length - 1);
}

/**
 * 格式化日期
 * @param {*} param.date 传入的日期, 默认当前日期.
 * @param {boolean} param.withHms 是否包含时分秒, 默认不包含. 
 * @returns 
 */
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

/**
 * 睡眠(暂停)指定ms时间
 * @param {number} ms 要睡眠的毫秒数 
 */
const sleep = (ms = 0) => {
  const startTime = new Date().getTime();
  while (new Date().getTime() < (startTime + ms));
}



module.exports = {
  dataType,
  dateFormat,
  sleep,
}