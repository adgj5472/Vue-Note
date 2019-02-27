# Vue-Note

## 開始學習 Vue
**Vue教學文件**
* [Vue.js](https://cn.vuejs.org/v2/guide/installation.html)  
* [Vue-cli](https://cli.vuejs.org/zh/guide/)  
* [Vue-router](https://router.vuejs.org/zh/installation.html)  
* [w3schools CSS](https://www.w3schools.com/css/css_navbar.asp)  

## 使用別人做好的組件(bootstrap-vue datatable...)
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
## 安裝Axios
```Bash
npm install axios
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

## Vue-Router

### < router-link >
<router-link> 通過to屬性指定URL，默認渲染成帶有正確連結的 <a> tag  
另外，當目標成功導向，<a>元素自動設置一個表示active的 CSS 。  

**active-class**  
``` vue
<router-link :to"{path:'/home'}" active-class="active">查詢</router-link>  
```
  
### beforeEach
``` vue
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```
beforeEach 接收三個參數:

**to: Route:** 要進入的router物件對象

**from: Route:** 目前的router

**next: Function:** 一定要調用此方法來 resolve hook。執行結果以next調用參數為準

next(): 在pipeline中的下一個hook。如果全部hook執行完，navigation 就是 confirmed

next(false): 中斷現在的navigation。如果 URL 改變(EX:使用者手動或瀏覽器上一頁)，URL則會重置到 from router對應的網址

next('/') 或者 next({ path: '/' }): 跳轉到一個不同的位址。現在的 navigation被中段，然後進行一個新的 navigation 。你可以向 next 傳遞任意位置對象，且允許設置如 replace: true、name: 'home' 之類的選項以及任何用在 router-link 的 to prop 或 router.push 中的選項。

next(error): (2.4.0+) 如果傳入 next 的参数是一個 Error 實例，則navigation會被終止且該错誤會被傳遞给 router.onError() 註冊過的callback。

確保要調用 next 方法，否則 hook 就不會被 resolved。
