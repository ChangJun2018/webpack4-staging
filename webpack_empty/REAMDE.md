#webpack4
##webpack环境配置
- npm install webpack webpack-cli webpack-dev-server -g //安装webpack
- 创建一个文件夹并在终端中cd到文件夹中，创建src、dist、config三个目录
- npm init -y  //创建package.json文件
- touch dist/index.html src/index.js //创建页面
- webpack --mode=development  //开发环境下webpack4打包
- webpack --mode=production  //生产环境下webpack4打包，体积小。
- touch config/webpack.dev.js    
- rm dist/main.js src/index.js //移除之前webpack打包创建的文件
###进入webpack.dev.js中对其进行配置
```
const path=require("path")
module.exports={
    //入口:有并且可以有多个
    entry:{
        main:["./src/main.js"]
    },
    //打包环境：开发&生产
    mode:"development",
    //出口，有且只能有一个
    output:{
        //打包之后的文件名
        filename:"[name]-bundle.js",
        //打包之后路径
        path:path.resolve(__dirname,"../dist"),
        //公开的引入路径
        publicPath:"/"
    },
    //本地服务器
    devServer:{
        contentBase:"dist"
    }
}
```
###相关命令
- webpack--config=config/webpack.dev.js   //webpack打包
- npm install webpack webpack-cli  - webpack-dev-server  //本地安装webpack
- webpack-dev-server --config=config/webpack.dev.js  //开启热更新


##加载css和配置pck-json
- npm install style-loader css-loader //安装相关加载器
###在webpack.dev.js中定义规则
```javascript
module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            }
        ]
    } 
```
## 加载html和image
- npm install html-loader extract-loader file-loader 
###在webpack.dev.js中定义规则
```JavaScript
 {
                test:/\.html$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"[name].html"
                        }
                    },
                    {
                        loader:"extract-loader",
                    },
                    {
                        loader:"html-loader"
                    },
                    {
                        test:/\.(bmp|jpg|png|tiff|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp)$/,
                        use:[
                            {
                                loader:"file-loader",
                                options:{
                                    name:"images/[name].[ext]"
                                }
                            }
                        ]
            }
                ],
}
```

## babel转化
- npm install babel-core
- npm install babel-plugin-transform-es2015-arrow-functions
- npm install -g babel-cli
- npm install babel-loader
###在src中创建.babelrc文件写入
```JavaScript
{
    "plugins": [
        "transform-es2015-arrow-functions"
    ]
}
```
###在webpack.dev.js中定义规则
```JavaScript
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ],
                exclude:/node_modules/
            },
```


## polyfill/preset/transform(ES7\ES8转化)
- npm install babel-plugin-async-to-promises 
- npm install babel-polyfill  //预编译，在入口文件加入babel-polyfill
- npm install babel-preset-env //安装环境变量
- npm install babel-loader
###在src中创建.babelrc文件写入
```JavaScript
{
    "plugins": [
        "transform-es2015-arrow-functions",
        "async-to-promises"
    ]
}
```
###使用babel-polyfill时需在.babelrc文件中写入
```JavaScript
{
    "presets":[
        [
            "env",
            {
                "targets":{
                    "browsers":["last 2 versions"]
                },
                "debug":true
            }
        ]
    ],
    "plugins": [
        "transform-runtime"
    ]
}
```
###在webpack.dev.js中定义规则
```JavaScript
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ],
                exclude:/node_modules/
            },
```


##css预处理器的转化
npm install node-sass sass-loader less less-loader stylus stylus-loader postcss  postcss-loader
###在webpack.dev.js中定义规则
```JavaScript
   // sass loader
            {
                test:/\.sass$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"postcss-loader"
                    },
                    {
                        loader:"sass-loader"
                    }
                ]
            },
            // less loader
            {
                test:/\.less$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"postcss-loader"
                    },
                    {
                        loader:"less-loader"
                    }
                ]
            },
            //stylus loader
            {
                test:/\.stylus$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"postcss-loader"
                    },
                    {
                        loader:"stylus-loader"
                    }
                ]
            },
```



