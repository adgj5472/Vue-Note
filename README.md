# Vue-Note

## 開始學習 Vue
**Vue教學文件**
* [Vue.js](https://cn.vuejs.org/v2/guide/installation.html)  
* [Vue-cli](https://cli.vuejs.org/zh/guide/)  
* [Vue-router](https://router.vuejs.org/zh/installation.html)  
* [w3schools CSS](https://www.w3schools.com/css/css_navbar.asp)  

## 使用套件(bootstrap-vue datatable...)
如果所有UI皆自己編寫則不用引入
* [Bootstrap-vue](https://bootstrap-vue.js.org/)  
* [Datatables](https://onewaytech.github.io/vue2-datatable/doc/#/zh-cn/README)  

### 安裝
```Bash
$ npm i vue bootstrap-vue bootstrap
$ npm i -S vue2-datatable-component
```
### main.js引入
``` js
import Datatable from 'vue2-datatable-component'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(Datatable)
Vue.use(BootstrapVue)
```

## Vs Code開發推薦套件
* vscode-icons  
檔案icon  
File -> Preferences -> File Icon Theme -> 選擇VSCode Icon  
* Vetur  
格式化.vue檔案格式  
* Vue 2 Sinppets  
vue 語法高亮顯示  

## 安裝 Node.js
#### Windows  
下載地址: https://nodejs.org/en/  
#### Ubuntu  
```Bash
$ sudo apt-get update  
$ sudo apt-get install nodejs  
$ sudo apt install npm  
```
### 檢查是否安裝完成
```Bash
$ node -v
```
## 安裝vue  
```Bash
$ npm config set registry http://registry.npmjs.org/  
$ npm install vue  
```
## 安裝vue-cli套件  
```Bash
$ npm install -g @vue/cli  
$ npm install -g @vue/cli-init  
```
### 檢查Vue版本  
```Bash
$ vue -V  
```
## 建立專案(拉取模板)
```Bash
$ vue init webpack my-project  
```
**tip**  
官方模板  
webpack(常用)  
simple  
pwa  
browserify  

**切換目錄**  
```Bash
$ cd my-project  
```
**安裝 package**  
```Bash
$ npm install  
```
**執行**  
```Bash
$ npm run dev  
```

