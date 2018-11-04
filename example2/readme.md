#服务器端渲染的好处主要是加速首屏渲染和利于SEO
#
此次webpack用的是3.12的版本
#
webpack打包失败，并报错：
 报错：
 ```
 Module build failed: Error: Cannot find module '@babel/core'
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.
 ```
是因为装了8+的babel-loader，需要降级版本到7
安装指定版本的babel-loader
 npm install babel-loader@7.1.5
