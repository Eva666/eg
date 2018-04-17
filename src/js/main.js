//要把组件传染到页面中，我们就必须要导vue这个库
//以前是通过script标签src属性导入vue的，现在只要通过es6语法import
import Vue from 'Vue';//导入这个vue之后还要装脚本：npm i vue -S  （代码运行时的依赖）
//es6导入的vue import Vue from 'Vue',与直接在script标签中导入vue有点区别，es6中导入vue
//失去了模板编译功能，失去该功能的原因是，使用了es6语法；vue知道你是用了构建工具，
//使用构建工具，应该会使用vue-loader；使用了vue-loader他会在本地打包时，把组件的模板编译好
//在浏览器中直接使用，相比以往的方式（script标签引入vue,在vue实例中编写模板），性能会有提升；
import App from '../compnonent/App.vue';
new Vue({
    el:'#app',
    render:function(c){
        return c(App);  //这个函数需要我们返回一个组件，把返回的组件渲染到el标签中
    }
})