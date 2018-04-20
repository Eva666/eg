 //from后面的路径，如含有./../，就相对当前文件找文件,如没有./../就直接从node_modules文件中找到对应的包;

//1.导入第三方包
import Vue from 'vue';
//2.引入根组件（App），根组件要渲染到index.html中
import AppComponent from '../compnonent/App.vue'
//3.关联视图
new Vue({
    el:'#app',
    //render会给传一个方法createNode
    render(createNode){
        //调这个方法传这个组件过去渲染
       return createNode(AppComponent);
    }
})