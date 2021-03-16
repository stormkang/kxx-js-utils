const assert = require('assert');
const { dataType, dateFormat } = require('../index');

let name;

describe('工具函数测试集', () => {

  /*
   * dataType函数测试
   */
  describe('#dataType()', () => {
    
    it('如果数据是字符串类型, 应该返回"String"', () => {
      assert.equal(dataType('Ryan'), 'String');
    });

    it('如果数据是数字类型, 应该返回"Number"', () => {
      assert.equal(dataType(666), 'Number');
    });

    it('如果数据是布尔类型, 应该返回"Boolean"', () => {
      assert.equal(dataType(true), 'Boolean');
    });
    
    it('如果数据是Null类型, 应该返回"Null"', () => {
      assert.equal(dataType(null), 'Null');
    });
    
    it('如果数据是Undefined类型, 应该返回"Undefined"', () => {
      assert.equal(dataType(name), 'Undefined');
    });
    
    it('如果数据是Symbol类型, 应该返回"Symbol"', () => {
      assert.equal(dataType(Symbol()), 'Symbol');
    });
    
    it('如果数据是对象类型, 应该返回"Object"', () => {
      assert.equal(dataType({}), 'Object');
    });

    it('如果数据是数组类型, 应该返回"Array"', () => {
      assert.equal(dataType([]), 'Array');
    });
    
    it('如果数据是函数类型, 应该返回"Function"', () => {
      assert.equal(dataType(() => {}), 'Function');
    });

  });

  /*
   * dateFormat函数测试
   */
  describe('#dateFormat', () => {

    it('如果什么参数都不传, 返回格式应该类似于: 2021-03-16(当前日期)', () => {
      assert.equal(dateFormat().length, 10);
    });
    
    it('如果只传入参数date: 1601510400000, 返回结果应该是: 2020-10-01', () => {
      assert.equal(dateFormat({date: new Date(1601510400000)}), '2020-10-01');
    });

    it('如果传入参数date: 1601526859000, withHms: true, 返回结果应该是: 2020-10-01 12:34:19', () => {
      assert.equal(dateFormat({date: new Date(1601526859000), withHms: true}), '2020-10-01 12:34:19');
    });
  });

});