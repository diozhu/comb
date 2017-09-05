# 蜂巢（Comb） [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> -- Simple project, created in vue2. As reference to other projects.

本地node必须为6.9x版本，下载地址：https://npm.taobao.org/mirrors/node

## Build Setup

``` bash
git clone http://172.28.20.6/Front/Comb

npm config set registry=https://registry.npm.taobao.org

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

git地址：[http://arp.gitlab.innertoon.com/Front/Comb](http://172.28.20.6/Front/Comb)

## Mod the vue-cli's config
##合并低于50k的文件
./build/webpack.base.config.js
```bash
#add this block in module.exports Author by Dio Zhu. on 2017.4.7
plugins: [
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 50000}) // 合并低于50K的小文件
],
```
##dev环境下console中显示文件信息
./build/webpack.dev.config.js
```bash
output: {
    pathinfo: true      // dev环境下，console中可显示对应的文件位置，而不是打包后的app.js，仅可用于dev环境！   -- Author by Dio Zhu. on 2017.4.20
}
```
##静态文件cdn方式
#####需要调整index.html加载webpack中的配置，再调整webpack的prod环境，需要注意排除的模块和写入的外链要一一对应
./build/webpack.prod.config.js
```bash
plugins: [
    ...
    new HtmlWebpackPlugin({
        ...
        // 静态文件采用cdn方式，直接写在index.html会影响本地开发时的调试。 Author by Dio Zhu. on 2017.6.27
        scripts: '<script src="https://cdn.bootcss.com/vue/2.3.3/vue.min.js"></script><script src="https://cdn.bootcss.com/vue-resource/1.3.4/vue-resource.min.js"></script><script src="https://cdn.bootcss.com/vue-router/2.6.0/vue-router.min.js"></script><script src="https://cdn.bootcss.com/vuex/2.3.1/vuex.min.js"></script>'
    }),
    ...
    // copy .htaccess to dist folder. Author by Dio Zhu. on 2017.7.19
    new CopyWebpackPlugin([
        {
            from: './.htaccess',
            to: config.build.assetsRoot
        }
    ])
    ...
    
// 添加externals，vue、vuex、vue-router等使用cdn方式，在此排除后，需要在上面的HtmlWebpackPlugin.scripts中设置外链。 Author by Dio Zhu. on 2017.6.23
externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'axios': 'Axios',
    'vuex': 'Vuex',
    'vue-resource': 'VueResource'
}
```
./index.html
```bash
...
        <%= htmlWebpackPlugin.options.scripts %>
    </body>
</html>
```
##关于添加虚路径后static的使用
修改了./config/index.js，之所以修改这个，而不是修改对应的配置文件，是因为脚手架只针对这个文件进行了替换，以后蜂巢拆分后，这里可优化；
```bash
...
var merge = require('webpack-merge');
var project_name = '"app"';

module.exports = {
    build: {
        env: merge(require('./prod.env'), {PROJECT_NAME: project_name}),
...
    dev: {
        env: merge(require('./dev.env'), {PROJECT_NAME: project_name}),

```
修改./build/dev-server.js，添加以下
```bash
...
if (!process.env.PROJECT_NAME) {
  process.env.PROJECT_NAME = JSON.parse(config.dev.env.PROJECT_NAME)
}
...
app.use('/' + process.env.PROJECT_NAME + '/static', express.static('./static')); // 修正虚路径静态文件目录. Add by Dio Zhu. on 2017.7.24
```
使用时本地使用以下方式，可解决dev环境和build后的prd环境，static目录由于添加虚路径造成的冲突问题:
```bash
    <... src="/项目名/static/images/xxx.png">
```

##添加Critical
目的是为了提升首屏的加载速度，原理是通过Critical组件按照屏幕规格（width、height）自动截取css放在head里，其余的放在下面异步加载，避免render blocking。因为安装时的问题，暂不打开，各项目中单独设置。效果可通过Chrome Lighthouse插件中查看。
添加文件./build/html.critical.webpack.plugin.js
```bash
const critical = require('critical');

function HtmlCriticalWebpackPlugin (options) {
  this.options = options;
};

HtmlCriticalWebpackPlugin.prototype.emit = function(compilation, callback) {
  critical.generate(this.options, (err, output) => {
    callback(err);
  });
};

HtmlCriticalWebpackPlugin.prototype.apply = function(compiler) {
  var self = this;
  compiler.plugin('after-emit', function (compilation, callback) {
    self.emit(compilation, callback);
  });
};

module.exports = HtmlCriticalWebpackPlugin
```
修改webpack.prod.conf.js
```bash
...
var HtmlCriticalPlugin = require("./html.critical.webpack.plugin"); // critical css. add by Dio Zhu. on 2017.7.27
...
    plugins: [
        ...
        new HtmlCriticalPlugin({
            base: path.resolve(__dirname, '../dist/app/'),
            src: 'index.html',
            dest: 'index.html',
            inline: true,
            minify: true,
            // extract: true, // 打开会拆分css，但拆分后不压缩了。。。
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false,
            }
        })
...
```

Critical插件会用到phantomjs，如果装不上或者build的时候报'Bad argument'(phantomjs没安装完整)，执行下面安装，或起vpn，删除node_modules后再次安装；
```bash
npm install phantomjs-prebuilt --phantomjs_cdnurl=https://bitbucket.org/ariya/phantomjs/downloads
```

##使用脚手架创建基于蜂巢的项目
蜂巢脚手架项目[generator-comb](http://172.28.20.6/Front/generator-comb)提供了快捷的项目创建方式
1. 安装yeoman：
```bash
npm install -g yo
```
2. 安装蜂巢脚手架：
```bash
npm install -g generator-comb
```
3. 在任意目录创建新项目（脚手架会生成一个项目目录）：
```bash
yo comb
```


## License

蜂巢（Comb） © [Dio Zhu](http://172.28.20.6/Front/Comb)


[npm-image]: https://badge.fury.io/js/Comb.svg
[npm-url]: https://npmjs.org
[travis-image]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf94U/93Tv9vSP9vSP9vSP+Sbf+CVf9vSf9vS/9vSP9yTv9vSP9vSP9vSP9zSv9xSf9vSP9vSP9wSf9vSP9wSf9wSv9vSP9vSP91Sv9wSP9vSP9vSP9xSv9vSP9wSf9vSP9wSf9vSP9vSv9wSv9vSJlteWgAAAAldFJOUwAKD/j80QIGeUDGF+ji8yMz24BPu2Ir7bAda5KgOolZqHWaSD0A4EBrAAACIUlEQVR42u2Z3XaCMBCEAYGAaEXxDwVUlPd/xbbH0OU0hGGBNjfkCiN+xjEMO4vVeySJNfU47qtqf5wU6Vzd6mu4V2cypH85VXKcLv40zNCrGsMLJ0BuzpK23cqD82asmMXiTfoIhAg+3seLYpS0h5VcXRZ9v4wy+XJ1GIzMl5KxjOup+GcqH4RM7/Lz61tz+raW0/eUjbR3tYA7+/c7tcz0Dh7qevBvwIOU817tJ7w8RW0wotKt/2Nfe5HV+8Itox5I8ZBiuoXTvYNdKe1DIOZTvW7wtfZEBifFlOeBFdTS7o/A4BQvQv4lTRGcQNpj54/KroWE9FN4zk+ShVrRE77zJ+1/riCDG+L8ZIqiOUsGN8T5yRQVqBePcf7Ya4UG45w/QFDs/Bwo3/kxlO/8GMp3fgxlO//W50Bf/Zx/x1pp2Mv51zYfWiLnv1l8aIic3/oDqDVDZ+gMnaEzdAqoU0RcKN2i9Depkg2lCk9bCboxC7qh235XbF2yoJZQCpTWEsVn1lJpRqVUe2zNUp6matEHyj4A1ZanoECFUJKvaCaMRilt8za/PgspyQZAKUigcEKbFwcJkk4XoyhIociDwxkFPop8OJzhGEkBlMIpjpEkXecntd9HYrOzuxCwRzB9E+Ff2h1YdHBd4BaSEmtBE/QhTDS7+G05Iw1EfuA125SlkZNyqtq5sUY33o1gBxt+eICbXeYfyOAGovmHXOMfx30CPRTVXNdLE+8AAAAASUVORK5CYII=
[travis-url]: http://172.28.20.6/Front/Comb
