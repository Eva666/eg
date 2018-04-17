<template>
  <p>{{ msg }}</p>
</template>
<script>
//vue要求对于暴露一个组件的配置项export default
//这里因为template独立写到上面去了，vue-loader到时候会帮我们处理，所以配置项就不用再写template'
export default {
    //组件里面的数据配置必须写成函数，return一个对象的形式；
  data(){
      return{
          msg:'测试vue文件可否用'
      }
  }
}
</script>
<style>
    p {
        font-size: 24px;
    }
</style>


