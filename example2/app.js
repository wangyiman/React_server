var Koa = require('koa');
var react = require('koa-react-view');
var staticCache = require('koa-static-cache');
var register = require('babel-register');
var path = require('path');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

var viewPath = path.join(__dirname, 'views');
var assetsPath = path.join(__dirname, 'public');

//把views文件放到localhost:3000下面
react(app, {
    views: viewPath
});

register({
    presets: ['env', 'react', 'stage-0'],
    extensions: [ '.jsx' ,'.js'],
});


//把public文件放到localhost:3000下面
//先引入静态资源
app.use(staticCache(assetsPath));
app
    .use(router.routes())
    .use(router.allowedMethods());
//渲染客户端页面,方式1：
app.use(function* () {
    this.body = this.render('Index', {
        name: 'wangyiman'
    }, true);
    console.log(this.body);
});
//方式2：使用路由
// router.get(['/', '/home'], async (ctx) => {
//     ctx.body = ctx.render('Index', {
//         name: 'wangyiman'
//     });
// });

app.listen(3000,function() {
    console.log(`listening 3000`);
});

