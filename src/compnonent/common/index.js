//导入组件
import HeaderComponent from './header.vue';
//向外导出install方法，install方法会接收到Vue,
//vue插件要求提供一个install方法，这个方法会被注入Vue。
//需要我们调用vue的filter    component   directive 去拓展功能;
export default{
    install(Vue){
        Vue.component('app-header',HeaderComponent);
    }
}