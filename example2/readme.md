React Server Render
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

 服务器端渲染加速首屏渲染思路：
 后端写react页面，生成html页面，注入reactview中——> reactview把之变成字符串——>变成字符串后调用render通过ctx.body返回给前端——>通过static管理拿到前端的代码，前端代码打包成js文件，引入后端的html页面中
 这样就实现了，先实现首屏渲染，再用静态页面填充首屏渲染后的内容。
