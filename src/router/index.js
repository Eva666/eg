import HomeComponent from '../compnonent/home/home.vue';
import NewsComponent from '../compnonent/news/news.vue';
import NewsDetail from '../compnonent/news/newsdetail.vue';
//对外导出一个路由配置，在main.js中导入。
export default{
    routes:[
        //首页路由配置
        {path:'/',redirect:'/index'},//redirect重定向
        {path:'/index',component:HomeComponent},
        
        //新闻路由配置
        {name:'n',path:'/news/list',component:NewsComponent},
        //新闻列表详情，每条都不一样，需通过路径参数id来请求接口
        //name属性方便router-link的to属性可以直接写name，不用写path
        {name:'nd',path:'/news/detail/:id',component:NewsComponent}
    ]

}