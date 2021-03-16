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
exports.dataType = (data) => {
  const typeStr = Object.prototype.toString.call(data);
  return typeStr.substring(8, typeStr.length - 1);
}