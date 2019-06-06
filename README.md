# comb

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## 蜂巢组件安装方式
```bash
npm i -S git+ssh://git@github.com/diozhu/comb-ui.git#v2.0.0
```

### 更新方式（需要清除node_modules的缓存！）
```bash
rm -rf node_modules/.cache && rm -rf node_modules/comb-ui && npm i -S comb-ui
```

## comb-loader安装方式

```
npm i -S git+ssh://git@github.com/diozhu/comb-loader.git#develop
```
### 更新方式（需要清除node_modules的缓存！）
```
rm -rf node_modules/.cache && rm -rf node_modules/comb-loader && npm i -S comb-loader
```

###查看特定环境配置信息
```bash
NODE_ENV=production vue inspect --plugin html
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
