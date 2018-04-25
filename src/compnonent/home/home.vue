<template>
    <main>
        <!-- 轮播图 -->
        <mt-swipe :auto="10000">
            <!-- 如果有v-for。就加上v-bind.可以提高性能，不写也可以，就是给数据添加唯一的标识 -->
            <mt-swipe-item v-for="item in lunbos" v-bind:key="item.url">
                 <!-- 如果不用v-bind就是图片是写死了 -->
                 <router-link v-bind:to="item.url">
                    <img v-bind:src="item.img">
                 </router-link>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
                <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">首页</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/news/list">
                    <span class="mui-icon mui-icon-chat"></span>
                    <div class="mui-media-body">热点新闻</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/photo/list">
                    <span class="mui-icon mui-icon-image"></span>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">搜索</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-info"></span>
                    <div class="mui-media-body">关于我们</div>
                </router-link>
            </li>
        </ul>

    </main>
</template>
<script>
export default{
     data(){
        return{
            lunbos:[]
        }
    },
    methods:{
        //请求数据成功后，把数据存储到lunbos中；
        getlunbo(){
            this.axios.get('http://vue.studyit.io/api/getlunbo')
            //成功回调后，会得到一个res对象，拿到数据，是要获取到res.data属性
            .then(rep=>this.lunbos=rep.data.message)
            .catch(error=>console.log(error))
        }
    },
    //组件初始化完毕后，自动调用接口，获取接口，渲染页面轮播图
    created(){
        this.getlunbo();
    }
}
</script>
// scoped属性。只对当前组件有效，如果不加，就是全局的；
<style lang="less" scoped>
    main{
        height: 260px;
        background-color: aquamarine;
    }
    li{
        width:33.33%;
    }
</style>


