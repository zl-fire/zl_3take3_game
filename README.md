# zl_3take3_game
一个functiuon：能返回一个 3 x 3 的井字棋游戏中，玩家下一步可能获胜的几种方式


<h1>问题说明</h1>


假设我们现在有一个 3 x 3 的井字棋游戏，我们用一个二维数组代表棋盘，’x’ 代表玩家 X 下的棋子，’o’ 代表玩家 O 下的棋子，’e’ 代表该格没有棋子。例如：

一个空白的棋盘以下面的二维数组表示
<code>

[ [‘e’, ‘e’, ‘e’],

  [‘e’, ‘e’, ‘e’],

  [‘e’, ‘e’, ‘e’] ]

 </code>

如果玩家 X 在第一行第一列下了一步棋，玩家 O 在第二行第二列下了一步棋，则表示如下：
<code>

[ [‘x’, ‘e’, ‘e’],

  [‘e’, ‘o’, ‘e’],

  [‘e’, ‘e’, ‘e’] ]

 </code>

现在需要一个 function，接受一个已有任意棋子的棋盘（和上面二维数组一样的格式），和玩家的标志（’x’ 或 ‘o'），返回该玩家下一步有几种可能的获胜方式（获胜方式以数组表示，[0, 0] 代表在第一行第一列下一步棋即可获胜，[2, 2] 代表在第三行第三列下一步棋即可获胜）。例如：

</code> 

someFunction(

‘x’,

[ [‘o’, ‘e’, ‘e’],

  [‘o’, ‘x’, ‘o’],

  [‘x’, ‘x’, ‘e’] ]

)

// return [ [2, 2], [0, 1], [0, 2] ]

 

someFunction(

‘x’,

[ [‘x’, ‘o’, ‘o’],

  [‘x’, ‘x’, ‘e’],

  [‘e’, ‘o’, ‘e’] ]

)

// return [ [2, 2], [1, 2], [2, 0] ]

 

someFunction(

‘x’,

[ [‘x’, ‘x’, ‘o’],

  [‘e’, ‘e’, ‘e’],

  [‘e’, ‘e’, ‘e’] ]

)

// return [ ]

 

someFunction(

‘o’,

[ [‘o’, ‘o’, ‘o’],

  [‘e’, ‘e’, ‘e’],

  [‘e’, ‘e’, ‘e’] ]

)

// return [ ]
</code>
<hr/>

<h1>函数实现</h1>
<pre>
<code>

/* 

  算法：
       由于三3 x 3 的井字棋的胜利路径能很简单的推算出来：即横三，数三，斜三，所以，可以采取遍历法。
  具体过程：
       先提前把所有胜利的路径坐标给出，然后在用当前棋盘中棋子去匹配坐标，根据胜利路径坐标来返回结果。
	   
*/

//传入参数为棋手与棋盘，棋手为x或o表示，棋盘已一个二维数组表示

let getSuccessResult=(player,board)=>{  
 successWays=[          //声明一个三维数组来存储所有可能的胜利结果：共8种， 
 [[0,0],[0,1],[0,2]],  //横三胜利路径坐标：3种
 [[1,0],[1,1],[1,2]],
 [[2,0],[2,1],[2,2]],
 [[0,0],[1,0],[2,0]],  //竖三胜利路径坐标: 3种
 [[0,1],[1,1],[2,1]],
 [[0,2],[1,2],[2,2]],
 [[0,0],[1,1],[2,2]],  //斜三胜利路径坐标: 3种
 [[2,0],[1,1],[0,2]],
 ]
 //声明一个结果数组
 let results=[];
 //一个循环得到所有的结果
 for(let i in successWays)
 {
   let res=0;//标志每条成功路径，已落的棋子数目，或1或2或3
   let empty=[]; //获取值每条胜利路径中的空缺点坐标
   for(let j in successWays[i])
    {
	   //获取每条胜利路径中每个点的坐标
	   let x=successWays[i][j][0];
	   let y=successWays[i][j][1];
	   //开始具体的判断：判断当前坐标是否已经有棋手落子
	   if(board[x][y]==player) res++; //,若有，标志变量res就加1
	   else{
		   if(board[x][y]=='e')empty=[x,y];//若无，再判断此位置是否为空，如果为空，就将这个点的坐标放入到empty中去
	   }  
    }
  //开始判断当前路径是否能够胜利：如果在每条可能的胜利路径下，有两个点都已经落子，且第三个点是可以落子的空位。
  //那么就说明这个空位点坐标是我们想要的结果之一。
  if(res==2&&empty.length==2) results.push(empty);
 }
 //返回最后的结果
 return results;
}
</code>
</pre>
<hr/>
<h1>测试结果</h1>
此处使用的mocha进行的单元测试，有四个测试用例，无误。
<pre>
</code>
 getSuccessResult算法测试
   √ ('x' testData1)结果应为==>[ [2, 2], [0, 1], [0, 2] ]
   √ ('x',testData2)结果应为==>[ [ 1, 2 ], [ 2, 0 ], [ 2, 2 ] ]
   √ ('x',testData3)结果应为==>[]
   √ ('o',testData4)结果应为==>[]
</code>
</pre> 

<h1>使用方式</h1>

这个算法我已经publish到npm里面了，使用方式如下：

<b>如果你仅是想看下这个算法，而不想安装到你的项目中，那么请按照以下方式操作</b>

<pre>
       
    1. 在你的电脑上建立一个空的目录，然后在此目录下打开命令行窗口.
    
    2. 在窗口中执行 npm init 创建一个package.json文件.
    
    3. 在窗口中执行 npm install zl_3take3_game --save-dev 将这个算法安装到本地.
    
    4. 通过窗口定位到node_modules\zl_3take3_game目录下.
    
    5. 在窗口中执行 npm run init 进行初始化（实际上就是安装下单元测试的两个依赖模块chai与mocha）.
    
    6. 在窗口中执行 npm run show 能够显示算法代码.
    
    7. 然后执行命令npm test就可以查看单元测试效果.
    
    8. 查看完后，你如果想卸载初始化时安装的模块chai与mocha，只需要执行命令npm run uninstall即可
    
</pre>
<hr/>
<b>如果你想将此算法使用在你的项目中，那么请按照以下方式操作</b>

<pre>
       
    1. 执行 npm install zl_3take3_game --save-dev 将这个算法安装到本地.
    
    2. 在你想使用的地方应用此算法即可，如：import game from 'zl_3take3_game';
    
    3. 直接使用此算法,如下:
      let testData1=[  
        ['o', 'e', 'e'],
        ['o', 'x', 'o'],
        ['x', 'x', 'e'] 
      ]; 
      console.info(game('x',testData1));//返回[ [ 2, 2 ], [ 0, 1 ], [ 0, 2 ] ]
      
      
完成代码如下：


import React, { Component } from 'react';
import game from 'zl_3take3_game';
import logo from './logo.svg';
import './App.css';
//测试数据一棋为'x'
  let testData1=[  
        ['o', 'e', 'e'],
        ['o', 'x', 'o'],
        ['x', 'x', 'e'] 
      ]; 
class App extends Component {
  render() {
   console.info(game('x',testData1));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

</pre>

<h1>结束</h1>


