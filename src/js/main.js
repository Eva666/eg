 //from后面的路径，如含有./../，就相对当前文件找文件,如没有./../就直接从node_modules文件中找到对应的包;

//1.导入第三方包
import Vue from 'vue';
//导入mint-ui仅仅导入js相关的东西，如要导入css,还要导入style
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
//2.引入根组件（App），根组件要渲染到index.html中
import AppComponent from '../compnonent/App.vue';
import Header from '../compnonent/common/header.vue';
//自定义组件每次创建一个新组件都要到该文件中全局声明一次，否则用不了，这样的写法太繁琐，
//可以写成一个插件,在common的文件夹中index.js
import Common from '../compnonent/common/index.js';
//3.关联视图

//手动启用插件（有些插件需要手动，有些不需要）
Vue.use(MintUI);
Vue.use(Common);
new Vue({
    el:'#app',
    //render会给传一个方法createNode
    render(createNode){
        //调这个方法传这个组件过去渲染
       return createNode(AppComponent);
    }
})