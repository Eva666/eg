//配置用绝对路径，不然会报错，用node的path模块，专门处理路径的
const path = require('path');
//导入插件
const HtmlWP = require("html-webpack-plugin");
const CleanWP = require("clean-webpack-plugin");
//node语法暴露出一个对象，里面就写配置
module.exports={
    //打包入口文件
    entry:path.resolve(__dirname,'./src/js/main.js'),
    //输出
    output:{
        path:path.resolve(__dirname,'./dist'),
        //把在main.js中引入的文件，全都捆绑到bundle.js中；
        filename:'bundle_[chunkhash:8].js',
    },
    //插件配置
    plugins:[
        //new （{传一些参数，指定模板，配置一个输出（名字可以换，）}）
        new HtmlWP({
            template:'./src/index.html',
            filename:'index.html',
            inject:'body',//注入的一个位置
            minify:{ // 压缩优化HTML页面
                collapseWhitespace:true, // 合并空白字符
                removeComments:true, // 移除注释
                removeAttributeQuotes:true // 移除属性上的引号
            }
        }),
        new CleanWP(['dist'])//每次打包完，都会在dist文件夹出现一个bundlexxx.js， 
                             //所以我们可以清除dist目录,如果有多个需要清除的目录就用{}；
    ],
    //模块配置
    module:{
        //配置loader规则
        rules:[
            //less
            {
               test:/\.css$/,
               use:['style-loader','css-loader','less-loader']
            },
            //html
            {
                test:/\.(html|tpl)$/,
                use:['html-loader']
            },
            //静态资源引入  limit:10240小于10kb的就打包进来，大于10kb就不打包进来
            {
                test:/\.(png|jpeg|gif|jpg|svg|.mp3|ttf)$/,
                use:[
                    {loader:'url-loader',options:{limit:10240}}
                    ]
            },
            
            //js语法解析。bable
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:path.resolve(__dirname,'node_modules')  //提高打包速度，把node_moudle排除
                //还要在.babelrc文件中配置以下
                // {
                //     "presets":["env"],
                //     "plugins":["transform-runtime"]
                // }
            },
            //vue.louter     有了它之后，我们写的组件都可以用.vue的结尾
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
        ]
    }
}
