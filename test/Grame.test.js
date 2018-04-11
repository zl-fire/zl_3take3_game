
//测试数据一棋为'x'
let testData1=[  
  ['o', 'e', 'e'],

  ['o', 'x', 'o'],

  ['x', 'x', 'e'] 
]; //此测试数据应该返回[ [ 2, 2 ], [ 0, 1 ], [ 0, 2 ] ]

//测试数据二棋为'x'
let testData2=[
  ['x', 'o', 'o'],

  ['x', 'x', 'e'],

  ['e', 'o', 'e'] 
]; //此测试数据应该返回[ [ 1, 2 ], [ 2, 0 ], [ 2, 2 ] ]


//测试数据三,棋为'x'
let testData3=[ 
  ['x', 'x', 'o'],

  ['e', 'e', 'e'],

  ['e', 'e', 'e']
]; //此测试数据应该返回[]


//测试数据四,棋为'o'
let testData4=[ 
  ['o', 'o', 'o'],

  ['e', 'e', 'e'],

  ['e', 'e', 'e']
 ]; //此测试数据应该返回[]


//开始编写测试用例，正式进行单元测试
let expect = require('chai').expect; //引入断言库
let getSuccessResult= require('../Grame');

describe('getSuccessResult算法测试',function(){
    it("('x' testData1)结果应为==>[ [2, 2], [0, 1], [0, 2] ]",function(){
        expect(getSuccessResult('x',testData1)).to.be.deep.equal([ [ 2, 2 ], [ 0, 1 ], [ 0, 2 ] ]);
    });
    it("('x',testData2)结果应为==>[ [ 1, 2 ], [ 2, 0 ], [ 2, 2 ] ]",function(){
        expect(getSuccessResult('x',testData2)).to.be.deep.equal([ [ 1, 2 ], [ 2, 0 ], [ 2, 2 ] ]);
    });
    it("('x',testData3)结果应为==>[]",function(){
        expect(getSuccessResult('x',testData3)).to.be.deep.equal([]);
    }); 
    it("('o',testData4)结果应为==>[]",function(){
        expect(getSuccessResult('o',testData4)).to.be.deep.equal([]);
    }); 
});