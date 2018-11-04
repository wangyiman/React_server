var react = require('koa-react-view');
var path = require('path');
var Koa = require('koa');
var Router = require('koa-router');

var router = new Router();
var app = new Koa();

var viewPath = path.join(__dirname, 'views');

react(app, {
    views: viewPath,             // the root directory of view files
    doctype: '<!DOCTYPE html>',
    extname: '.js',                 // view 层直接渲染文件名后缀
    beautify: true,                 // 是否需要对 DOM 结构进行格式化
    writeResp: false,
});

router.get('/home', function*() {
    this.body = this.render('Home', {
        mydata: {
            name: 'wangyiman',
            domain: `localhost:${location.port}`
        }
    });
});

app
    .use()
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3000, function() {
    console.log('3000 is listening.');
});